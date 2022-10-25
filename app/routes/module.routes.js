const router = require("express").Router();

// import controllers
const {
  createModule,
  getAllUserModules,
  getAllModules,
  addModule,
} = require("../controllers/module");

router.get("/getAllModules", getAllModules);
router.get("/getAllUserModules", getAllUserModules);
router.post("/createModule", createModule);
router.post("/addModule", addModule);

module.exports = router;
