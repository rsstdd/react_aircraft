const router = require('express').Router();

const jwt = require('jsonwebtoken');
const knex = require('../knex');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const { decamelizeKeys } = require('humps');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.HOST + '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  return done(null, { profile, accessToken, refreshToken });
}));

router.get('/google',
  passport.authenticate('google', {
    scope: ['email', 'profile', 'https://www.googleapis.com/auth/plus.login']
  }), (req, res, _next) => {
    console.log(json.stringify(req));
  });

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }), (req, res, next) => {
    const email = req.user.profile.emails[0].value;
    const avatarUrl = req.user.profile.photos[0].value;
    const authId = req.user.profile.id.slice(5);
    const name = req.user.profile.displayName;
    const newUser = {
      email,
      avatarUrl,
      authId,
      name
    };

    knex('users')
      .where('auth_id', authId)
      .select(knex.raw('1=1'))
      .then((result) => {
        if (!result) {
          const newUser = {
            email,
            avatarUrl,
            authId,
            name
          };

          knex('users').insert(decamelizeKeys(newUser), '*')
          .then((users) => {

            return users;
          })
          .catch((err) => {
            next(err);
          });
        }

        const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3);
        const token = jwt.sign({ userId: authId }, process.env.JWT_SECRET, { expiresIn: '3h' });

        res.cookie('token', token, {
          httpOnly: true,
          expires: expiry,
          secure: router.get('env') === 'production'
        });

        res.cookie('loggedIn', 'true');
        res.cookie('user', newUser);
        res.redirect('/collection');
      })
      .catch((err) => {
        next(err);
      });
  });

router.get('/logout', (req, res) => {
  const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3);

  res.cookie('loggedIn', 'false', { expires: expiry });
  res.clearCookie('token');
  res.clearCookie('user');
  res.redirect('/');
});

module.exports = router;
