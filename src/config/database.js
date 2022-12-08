const pg = require('pg');
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME_DEV || '',
    password: process.env.DATABASE_PASSWORD_DEV || '',
    database: process.env.DATABASE_NAME_DEV || '',
    host: process.env.DATABASE_HOST_DEV || '',
    port: process.env.DATABASE_PORT_DEV || '',
    dialect: 'postgres',
    dialectModule: pg
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres'

  },
  production: {
    username: process.env.DATABASE_USERNAME || '',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || '',
    host: process.env.DATABASE_HOST || '',
    port: process.env.DATABASE_PORT || '',
    dialect: 'postgres',
    dialectModule: pg
  }
};
