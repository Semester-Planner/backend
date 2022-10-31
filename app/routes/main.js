const router = require("express").Router();

// import middlewares
const {
  unresolvedPathHandler,
  errorHandler,
} = require("../middlewares/error_handlers");
const checkAuth = require("../middlewares/auth");

// import all routers
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const moduleRoutes = require("./module.routes");
const entryRoutes = require("./entry.routes");
const requirementRoutes = require("./requirement.routes");

// main routes
router.use("/auth", authRoutes);
// !-- commented for testing:
//router.use(checkAuth);
router.use("/users", userRoutes);
router.use("/module", moduleRoutes);
router.use("/entry", entryRoutes);
router.use("/requirement", requirementRoutes);

router.use(unresolvedPathHandler);
router.use(errorHandler);

module.exports = router;
