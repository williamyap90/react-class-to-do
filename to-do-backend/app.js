const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Helloooo');
});

const port = 3000;

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${port}`);
});

module.exports = app;
