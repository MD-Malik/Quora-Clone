
const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;


passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "281913688914-lsut6alanqb38gqoagkfc9lok484fs2e.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:9008/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

module.exports = passport;