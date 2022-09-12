const db = require("../db/models");

const {
  User,
  Sequelize: { Op },
} = db;

// reset password
exports.resetPassword = (req, res, next) => {
  const {
    body: { username, oldPassword, newPassword },
  } = req;

  User.findByUsername(username)
    .then((user) => {
      if (user.passwordHash === oldPassword) {
        user.passwordHash = newPassword;
        return user.save();
      }
      throw Error("Incorrect password");
    })
    .then(() => {
      return res.status(200).send("Password changed successfully :)");
    })
    .catch((err) => next(err));
};
    
// create user
exports.createUser = (req, res, next) => {
  const {
    body: { username, email, passwordHash },
  } = req;

  db.User.findOrCreate({
    where: {
      [Op.or]: [{ username }, { email }],
    },
    defaults: {
      username: username,
      email: email,
      passwordHash: passwordHash,
    },
  })
    .then(([user, created]) => {
      if (!created) throw Error("Name or email already in use");
      return res.status(200).send("Successfully created user");
    })
    .catch((err) => next(err));
};
