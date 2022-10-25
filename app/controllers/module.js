const db = require("../db/models");

const { Module } = db;

// get all modules
exports.getAllModules = (_req, res, next) => {
  Module.findAll()
    .then((modules) => {
      return res.status(200).json(modules);
    })
    .catch((err) => next(err));
};

// get all user's modules
exports.getAllUserModules = async (req, res, next) => {
  const { user } = req;

  user
    .getModules()
    .then((modules) => res.status(200).json(modules))
    .catch((err) => next(err));
};

// create module
exports.createModule = (req, res, next) => {
  const {
    body: { name, mod_code, department, coordinator },
  } = req;

  Module.create({
    name,
    mod_code,
    department,
    coordinator,
  })
    .then(() => {
      return res.status(200).send("Successfully created module :)");
    })
    .catch((err) => next(err));
};
