const router = require("express").Router();

// import controllers
const { getAllEntries, createEntry } = require("../controllers/entry");

router.get("/getAllEntries", getAllEntries);
router.post("/createEntry", createEntry);

module.exports = router;
