const db = require("../db/models");

const { Entry } = db;

// get all entries
exports.getAllEntries = (_req, res, next) => {
  Entry.findAll()
    .then((entries) => {
      return res.status(200).json(entries);
    })
    .catch((err) => next(err));
};

// create entry
exports.createEntry = (req, res, next) => {
  const {
    body: { name, description, date, notes },
  } = req;

  Entry.create({
    name,
    description,
    date,
    notes,
  })
    .then(() => {
      return res.status(200).send("Successfully created entry :)");
    })
    .catch((err) => next(err));
};
