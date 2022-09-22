const db = require("../db/models");

const { Module } = db;

// create module
exports.createModule = (req, res, next) => {
  const {
    body: { name, mod_code, description, department, mandatory, coordinator },
  } = req;

  db.Module.create({
    name,
    mod_code,
    description,
    department,
    mandatory,
    coordinator,
  })

    .then(() => {
      return res.status(200).send("Successfully created module :)");
    })
    .catch((err) => next(err));
};