const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, PORT, NODE_ENV } = process.env;

const db = require("../db/models");
const { createUser } = require("../controllers/user");

const { User } = db;

var Strategy =
  NODE_ENV != "test"
    ? require("passport-google-oauth20").Strategy
    : require("passport-mocked").Strategy;
/**
 * registers all passport authentication strategiess
 *
 * @param {Object} passport - passport object
 */
exports.register = async (passport) => {
  const callbackURL = `http://localhost:${PORT || "3001"}/auth/google/callback`;

  // use google oauth2 strategy
  passport.use(
    new Strategy(
      {
        name: "google",
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL,
      },
      async (_accessToken, _refreshToken, data, done) => {
        // find or create user email in database
        const user = await createUser(data);
        if (user) return done(null, user);
        return done();
      }
    )
  );
};
