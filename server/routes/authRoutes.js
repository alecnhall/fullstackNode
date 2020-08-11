const passport = require('passport');
module.exports = (app) => {
  // making auth request
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  // callback request that has code
  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );
};
