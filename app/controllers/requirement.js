const db = require("../db/models");

const { Module } = db;

// get all module's requirements
exports.getAllModuleReqs = (req, res, next) => {
  const { body: id } = req;

  return Module.findByPk(id)
    .then((module) => module.getRequirements())
    .then((requirements) => res.status(200).json(requirements))
    .catch((err) => next(err));
};
