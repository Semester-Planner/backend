const router = require("express").Router();
const passport = require("passport");
const { logout, checkSession } = require("../controllers/auth");

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

//check session
router.get("/session", checkSession);

module.exports = router;
