const db = require("../db/models");

const {
  User,
  Sequelize: { Op },
} = db;

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
