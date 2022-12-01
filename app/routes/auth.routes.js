const router = require("express").Router();
const passport = require("passport");
const { successfulLogin, logout, checkAuth } = require("../controllers/auth");

const { NODE_ENV } = process.env;

// consent screen
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// authorize
if (NODE_ENV != "test") {
  router.get(
    "/google/callback",
    passport.authenticate("google", {
      successRedirect: "http://localhost:3000/modules",
    })
  );
} else {
  router.get(
    "/google/callback",
    passport.authenticate("google"),
    successfulLogin
  );
}

router.get("/logout", logout);

router.get("/session", checkAuth);

module.exports = router;
