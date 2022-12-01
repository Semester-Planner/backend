const db = require("../db/models");

const { Module } = db;

exports.getAllModules = (_req, res, next) => {
  Module.findAll()
    .then((modules) => {
      return res.status(200).json(modules);
    })
    .catch((err) => next(err));
};

exports.getAllUserModules = (req, res, next) => {
  const { user } = req;

  return user
    .getModules()
    .then((modules) => res.status(200).json(modules))
    .catch((err) => next(err));
};

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

exports.addModule = (req, res, next) => {
  const {
    body: { id },
    user,
  } = req;

  return user
    .addModule(id)
    .then(() => res.status(200).send("Successfully added module :)"))
    .catch((err) => next(err));
};

exports.removeModule = (req, res, next) => {
  const {
    body: { id },
    user,
  } = req;

  return user
    .removeModule(id)
    .then(() => res.status(200).send("Successfully removed module :)"))
    .catch((err) => next(err));
};
