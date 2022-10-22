const router = require("express").Router();
const passport = require("passport");

// consent screen
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// authorized redirect
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // successful authentication, redirect to the app.
    console.log("successful callback - redirect to /");
    res.redirect("/");
  }
);

module.exports = router;
