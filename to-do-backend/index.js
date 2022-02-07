const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const dbURI = `mongodb+srv://${username}:${password}@cluster0.ywekd.mongodb.net/to-do?retryWrites=true&w=majority`;

mongoose
  .connect(dbURI)
  .then((result) => {
    console.log('Database connected.');
  })
  .catch((err) => console.log(err));
