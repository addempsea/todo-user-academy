const pgPromise = require('pg-promise');
const promise = require('bluebird');
require('dotenv').config();

const pgp = pgPromise({ promiseLib: promise, noLocking: true });

const dbUrl = process.env.DATABASE_URL;

const db = pgp(dbUrl);

module.exports = db;
