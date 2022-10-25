const router = require("express").Router();

// import controllers
const {
  createModule,
  getAllUserModules,
  getAllModules,
} = require("../controllers/module");

router.get("/getAllModules", getAllModules);
router.get("/getAllUserModules", getAllUserModules);
router.post("/createModule", createModule);

module.exports = router;
