const router = require("express").Router();

// import controllers
const {
  createModule,
  getAllUserModules,
  getAllModules,
  addModule,
  removeModule,
} = require("../controllers/module");

router.get("/getAllModules", getAllModules);
router.get("/getAllUserModules", getAllUserModules);
router.post("/createModule", createModule);
router.post("/addModule", addModule);
router.post("/removeModule", removeModule);

module.exports = router;
