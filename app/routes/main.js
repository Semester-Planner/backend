const router = require("express").Router();

const {
  unresolvedPathHandler,
  errorHandler,
} = require("../middlewares/error_handlers");
const checkAuth = require("../middlewares/auth");

const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const moduleRoutes = require("./module.routes");
const entryRoutes = require("./entry.routes");
const requirementRoutes = require("./requirement.routes");

router.use("/auth", authRoutes);
router.use(checkAuth);
router.use("/users", userRoutes);
router.use("/module", moduleRoutes);
router.use("/entry", entryRoutes);
router.use("/requirement", requirementRoutes);

router.use(unresolvedPathHandler);
router.use(errorHandler);

module.exports = router;
