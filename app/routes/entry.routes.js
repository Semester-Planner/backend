const router = require("express").Router();

const { getAllEntries, createEntry } = require("../controllers/entry");

router.get("/getAllEntries", getAllEntries);
router.post("/createEntry", createEntry);

module.exports = router;
