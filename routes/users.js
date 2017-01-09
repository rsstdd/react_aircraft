'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');

const ev = require('express-validation');
const validations = require('../validations/users');

const router = express.Router();

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err) => {
    res.verify = err === null;
    next();
  });
};

router.post('/users', authorize, ev(validations.post), (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  knex('users')
    .where('email', email)
    .then((rows) => {
      if (rows.length) {
        return next(boom.create(
          400,
          'Email already exists'
        ));
      }

      bcrypt.hash(password, 13)
        .then((hashedPassword) => {
          const insertUser = { firstName, lastName, email, hashedPassword };

          return knex('users')
            .insert(decamelizeKeys(insertUser), '*');
        })
        .then((rows) => {
          const user = camelizeKeys(rows[0]);

          delete user.hashedPassword;

          return user;
        })
        .then((user) => {
          const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3);
          const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: '3h'
          });

          res.cookie('token', token, {
            httpOnly: true,
            expires: expiry,
            secure: router.get('env') === 'production'
          });

          res.send(user);
        })
        .catch((err) => {
          next(err);
        });
    });
});

module.exports = router;
