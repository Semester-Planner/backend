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
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const moduleRoutes = require("./module.routes");

// main routes
router.use("/auth", authRoutes);
//router.use(checkAuth);
router.use("/user", userRoutes);
router.use("/module", moduleRoutes);

router.use(unresolvedPathHandler);
router.use(errorHandler);

module.exports = router;
