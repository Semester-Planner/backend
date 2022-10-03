const router = require("express").Router();
const {
  unresolvedPathHandler,
  errorHandler,
} = require("../middlewares/error_handlers");
const { testController } = require("../controllers/main");

const {
  createUser,
  resetPassword,
  findAllUserModules,
} = require("../controllers/user");
const { createModule } = require("../controllers/module");

// const { test } = require("../middlewares/test");

// routers
router.get("/", (_req, res, _next) => res.send("Hello world"));
router.get("/connection", (_req, res, _next) =>
  res.send({ message: "Hello from the server :))" })
);

router.post("/hello", testController);
router.post("/user/createUser", createUser);
router.patch("/user/resetPassword", resetPassword);
router.post("/user/findAllUserModules", findAllUserModules);

router.post("/module/createModule", createModule);

router.use(unresolvedPathHandler);
router.use(errorHandler);

module.exports = router;
