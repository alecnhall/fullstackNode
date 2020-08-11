const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

// implementing passport strategy
passport.use(new googleStrategy());

// test route
// app.get('/', (req, res) => {
//   res.send({ bye: 'guy' });
// });

app.post('/auth/google', (req, res) => {});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
