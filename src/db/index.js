const dotenv = require('dotenv').config();

const knexDB = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
  pool: { min: 0, max: 7 },
  acquireConnectionTimeout: 10000,
});

module.exports = { knexDB };