const db = require("../db/models");

const { User } = db;
const { Module } = db;

// get all users
exports.getAllUsers = (_req, res, next) => {
  console.log(User);
  User.findAll()
    .then((users) => {
      return res.status(200).json(users);
    })
    .catch((err) => next(err));
};

// find all user's modules
exports.findAllUserModules = async (req, res, next) => {
  const { user } = req;

  user
    .getModules()
    .then((modules) => res.status(200).json(modules))
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
