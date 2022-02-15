const dotenv = require('dotenv').config();
const { Pool } = require('pg');
const path = require('path');

if (!process.env.PGDATABASE) {
  throw new Error('No PGDATABASE configured');
}

module.exports = new Pool();
