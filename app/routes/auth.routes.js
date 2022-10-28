const router = require("express").Router();
const passport = require("passport");
const { successfulLogin, logout, checkAuth } = require("../controllers/auth");

const { NODE_ENV } = process.env;

// consent screen
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// authorized redirect
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

// log out user
router.get("/logout", logout);

// checks session
router.get("/session", checkAuth);

module.exports = router;
