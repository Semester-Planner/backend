const router = require("express").Router();
const {
  unresolvedPathHandler,
  errorHandler,
} = require("../middlewares/error_handlers");
const { testController } = require("../controllers/main");

// const { test } = require("../middlewares/test");

const { resetPassword } = require("../controllers/user");

// routers
router.get("/", (_req, res, _next) => res.send("Hello world"));

router.patch("/user/resetPassword", resetPassword);

router.post("/hello", testController);

router.use(unresolvedPathHandler);
router.use(errorHandler);

module.exports = router;
