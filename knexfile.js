'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/react_aircraft'
  },

  test: {
    client: 'pg',
    connection: ''
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
