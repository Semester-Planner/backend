const router = require("express").Router();
const passport = require("passport");
const { successfulLogin, logout } = require("../controllers/auth");

// consent screen
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// authorized redirect
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/modules",
  })
);

// log out user
router.get("/logout", logout);

module.exports = router;
