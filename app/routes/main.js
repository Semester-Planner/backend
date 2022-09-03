const router = require("express").Router();
const { unresolvedPathHandler } = require("../middlewares/error_handlers");

router.get("/", (req, res, next) => res.send("Hello world"));

router.get("/hello", (req, res, next) => res.send("Hello world!!!!!!!"));

router.use(unresolvedPathHandler);

module.exports = router;
