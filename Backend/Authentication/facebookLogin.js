const passport = require("passport")
const FacebookStrategy = require('passport-facebook').Strategy;
// require('dotenv').config()

// passport.serializeUser(function (user, done) {
//     done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//     done(null, user);
// });

// passport.use(new GoogleStrategy({
//     clientID: "329209822655348",
//     clientSecret: "85a9e6f5bf8d4dfc8e0964b305423c69",
//     callbackURL: process.env.callbackURL,
//     passReqToCallback: true
// },
//     function (request, accessToken, refreshToken, profile, done) {
//         return done(null, profile);
//     }
// ));

// 
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new FacebookStrategy({
    clientID: "329209822655348",
    clientSecret: "85a9e6f5bf8d4dfc8e0964b305423c69",
    callbackURL: "https://quora-clone-backend.herokuapp.com/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email'],
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
));

//1434677100326865
module.exports = passport;
