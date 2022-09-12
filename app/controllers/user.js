const db = require("../db/models");

const { User } = db;

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
