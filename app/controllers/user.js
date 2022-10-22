const db = require("../db/models");

const { User } = db;
const { Module } = db;

// find all user's modules
exports.findAllUserModules = (req, res, next) => {
  const {
    body: { userId },
  } = req;

  User.findAll({
    where: { id: userId },
    attributes: { exclude: ["name", "surname", "email", "picture"] },
    include: [
      {
        model: Module,
        required: true,
        through: { attributes: [] },
      },
    ],
  })
    .then((modules) => {
      return res.status(200).json(modules);
    })
    .catch((err) => next(err));
};

exports.createUser = async (data) => {
  const user = await User.findOrCreate({
    where: { email: data._json.email },
    defaults: {
      name: data._json.given_name,
      surname: data._json.family_name,
      picture: data._json.picture,
    },
    raw: true,
  });
  return user;
};
