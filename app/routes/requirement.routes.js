const router = require("express").Router();

// import controllers
const { getAllModuleReqs } = require("../controllers/requirement");

router.post("/getAllModuleReqs", getAllModuleReqs);

module.exports = router;
