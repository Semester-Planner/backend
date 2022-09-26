const db = require("../db/models");

const { User } = db;

// reset password
exports.resetPassword = (req, res, next) => {
  const {
    body: { email, oldPassword, newPassword },
  } = req;

  User.findByEmail(email)
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
    body: { name, surname, email, passwordHash },
  } = req;

  db.User.findOrCreate({
    where: { email },
    defaults: {
      name: name,
      surname: surname,
      passwordHash: passwordHash,
    },
  })
    .then(([user, created]) => {
      if (!created) throw Error("Email already in use");
      return res.status(200).send("Successfully created user");
    })
    .catch((err) => next(err));
};
