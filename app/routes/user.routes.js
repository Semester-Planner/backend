const router = require("express").Router();

router.get("/test", (_req, res, _next) => {
  res.send("User route");
});

module.exports = router;
