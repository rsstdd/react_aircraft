'use strict';

const express = require('express');
const boom = require('boom');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const ev = require('express-validation');
const validations = require('../validations/airplanes');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/airplanes', (_req, res, next) => {
  console.log('______________________|==========|__________________________');
  console.log('______________________|--Router--|__________________________');
  console.log('______________________|==========|__________________________');

  knex('airplanes')
    .orderBy('name')
    .then((rows) => {
      const aircraft = camelizeKeys(rows);

      res.send(aircraft);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/airplanes/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  knex('airplanes')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      const aircraft = camelizeKeys(row);

      res.send(aircraft);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/airplanes', ev(validations.post), (req, res, next) => {
  const { name, yearInService, countryOfOrigin, operators, maxSpeed, maxRange, ceiling, engines, imgUrl } = req.body;
  const insertPlane = { name, yearInService, countryOfOrigin, operators, maxSpeed, maxRange, ceiling, engines, imgUrl };

  knex('airplanes')
    .insert(decamelizeKeys(insertPlane), '*')
    .then((rows) => {
      const aircraft = camelizeKeys(rows[0]);

      res.send(aircraft);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/airplanes/:id', ev(validations.patch), (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  knex('airplanes')
    .where('id', id)
    .first()
    .then((book) => {
      if (!book) {
        throw boom.create(404, 'Not Found');
      }

      const { name, yearInService, countryOfOrigin, operators, maxSpeed, maxRange, ceiling, engines, imgUrl } = req.body;
      const updateAircraft = {};

      return knex('airplanes')
        .update(decamelizeKeys(updateAircraft), '*')
        .where('id', req.params.id);
    })
    .then((rows) => {
      const book = camelizeKeys(rows[0]);

      res.send(book);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/airplanes/:id', (req, res, next) => {
  let aircraft;
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(Number.parseInt(id))) {
    return next();
  }

  knex('airplanes')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      aircraft = camelizeKeys(row);

      return knex('airplanes')
        .del()
        .where('id', id)
    })
    .then(() => {
      delete aircraft.id;

      res.send(aircraft);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
