const passportForGoogle = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passportForGoogle.serializeUser(function (user, done) {
  done(null, user);
});

passportForGoogle.deserializeUser(function (user, done) {
  done(null, user);
});

passportForGoogle.use(
  new GoogleStrategy(
    {
      clientID:
        "281913688914-6koonm1m8laci0lt0lgvo6s811sm3i1d.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "https://quora-clone-backend.herokuapp.com/google/callback",
      passReqToCallback: true, //google authentication
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

module.exports = passportForGoogle;
