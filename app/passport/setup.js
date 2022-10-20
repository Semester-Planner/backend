const db = require("../db/models");

const { User } = db;

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    // store userId in the session so we can retrieve it later
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    // find user in database by stored session userId
    const user = await User.findByPk(id);
    if (!user) return done("User not found");
    done(null, user);
  });
};
