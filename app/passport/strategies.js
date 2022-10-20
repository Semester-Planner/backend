const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const db = require("../db/models");

const { User } = db;

var GoogleStrategy = require("passport-google-oauth20").Strategy;

/**
 * Registers all passport authentication strategiess
 *
 * @param {Object} passport - passport object
 */
exports.register = async (passport) => {
  const callbackURL = "http://localhost:3001/auth/google/callback";

  // Use Google oauth2 strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL,
      },
      async (_accessToken, _refreshToken, data, done) => {
        // Find user email in database
        const user = await User.findOne({
          where: { email: data._json.email },
        });
        if (user) return done(null, user);
        return done();
      }
    )
  );
};
