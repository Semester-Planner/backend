const router = require("express").Router();

// import middlewares
const {
  unresolvedPathHandler,
  errorHandler,
} = require("../middlewares/error_handlers");
const checkAuth = require("../middlewares/auth");

// import controllers
const { findAllUserModules } = require("../controllers/user");
const { createModule, getAllModules } = require("../controllers/module");

// import all routers
const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");

// main routes
router.use("/auth", authRoutes);
router.use(checkAuth);
router.use("/user", userRoutes);

router.get("/user/findAllUserModules", findAllUserModules);
router.post("/module/getAllModules", getAllModules);
router.post("/module/createModule", createModule);

router.use(unresolvedPathHandler);
router.use(errorHandler);

module.exports = router;
