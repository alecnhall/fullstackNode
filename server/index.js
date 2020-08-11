const express = require('express');
const passport = require('passport');
const app = express();

app.get('/', (req, res) => {
  res.send({ bye: 'guy' });
});

app.post('/auth/google', (req, res) => {});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
