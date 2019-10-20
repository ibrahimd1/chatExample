const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// models
const User = require("../models/users");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "729611920917-i11c3s8lp9b9fgvlqavu7k2ho0d20g4u.apps.googleusercontent.com",
      clientSecret: "eSRVc6SPBD2ccY8UQI5bQt3k",
      callbackURL: "/auth/google/callback"
    },
    // @ts-ignore
    (accessToken, refreshToken, profile, done) => {
      const data = profile._json;
      // @ts-ignore
      User.findOrCreate(
        {
          // @ts-ignore
          googleId: data.sub
        },
        {
          // @ts-ignore
          name: data.given_name,
          // @ts-ignore
          surname: data.family_name,
          // @ts-ignore
          profilePhotoUrl: data.picture
        },
        (err, user) => {
          return done(err, user);
        }
      );
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
