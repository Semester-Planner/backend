const router = require("express").Router();
const { unresolvedPathHandler } = require("../middlewares/error_handlers");
const { testController } = require("../controllers/main");
// const { test } = require("../middlewares/test");

router.get("/", (_req, res, _next) => res.send("Hello world"));

router.post("/hello", testController);

router.use(unresolvedPathHandler);

module.exports = router;
