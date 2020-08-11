const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

// implementing passport strategy
// console.developers.google.com
passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

// test route
// app.get('/', (req, res) => {
//   res.send({ bye: 'guy' });
// });

app.post('/auth/google', (req, res) => {});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
