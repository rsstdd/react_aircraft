'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();

app.disable('x-powered-by');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

app.use(bodyParser.json());
app.use(cookieParser());

const path = require('path');

app.use(express.static(path.join('public')));

app.use((req, res, next) => { // starts with api or the path is not specified. protection against js insertion attacks
  if (!req.path.startsWith('/api') || /json/.test(req.get('Accept'))) { // getting a header and ensuring that you're getting JSON from the server
    return next();
  }

  res.sendStatus(406);
});

const users = require('./routes/users');
const auth = require('./routes/auth');
const favorites = require('./routes/favorites');
const airplanes = require('./routes/airplanes');
const me = require('./routes/me');

app.use('/api', users);
app.use('/auth', auth);
app.use('/api', favorites);
app.use('/api', airplanes);
app.use('/api', me);

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.errors[0].messages[0]);
  }

  // eslint-disable-next-line no-console
  console.error(err.stack);
  res.sendStatus(500);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  if (app.get('env') !== 'test') {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${port}`);
  }
});

module.exports = app;
