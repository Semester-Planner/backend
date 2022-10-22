const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, PORT } = process.env;

const db = require("../db/models");

const { User } = db;

var GoogleStrategy = require("passport-google-oauth20").Strategy;

/**
 * registers all passport authentication strategiess
 *
 * @param {Object} passport - passport object
 */
exports.register = async (passport) => {
  const callbackURL = `http://localhost:${PORT || "3001"}/auth/google/callback`;

  // use google oauth2 strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL,
      },
      async (_accessToken, _refreshToken, data, done) => {
        // find or create user email in database
        const user = await User.findOrCreate({
          where: { email: data._json.email },
          defaults: {
            name: data._json.given_name,
            surname: data._json.family_name,
            picture: data._json.picture,
          },
          raw: true,
        });
        if (user) return done(null, user);
        return done();
      }
    )
  );
};
