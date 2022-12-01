const router = require("express").Router();

const { getAllModuleReqs } = require("../controllers/requirement");

router.post("/getAllModuleReqs", getAllModuleReqs);

module.exports = router;
