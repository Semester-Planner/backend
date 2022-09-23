const db = require("../db/models");

const {
  User,
  Sequelize: { Op },
} = db;

// reset password
exports.resetPassword = (req, res, next) => {
  const {
    body: { email, oldPassword, newPassword },
  } = req;

  User.findByEMail(email)
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
    body: { email, passwordHash },
  } = req;

  db.User.findOrCreate({
    where: {
      [Op.or]: [email],
    },
    defaults: {
      email: email,
      passwordHash: passwordHash,
    },
  })
    .then(([user, created]) => {
      if (!created) throw Error("Email already in use");
      return res.status(200).send("Successfully created user");
    })
    .catch((err) => next(err));
};
