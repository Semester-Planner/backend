const router = require("express").Router();
const userRoutes = require("./user.routes");

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
const { createModule, findAllModules } = require("../controllers/module");

// const { test } = require("../middlewares/test");

// import other routers
router.use("/user", userRoutes);

// routers
router.get("/test", (_req, res, _next) => res.send("Hello world"));
router.get("/connection", (_req, res, _next) =>
  res.send({ message: "Hello from the server :))" })
);

// -- refactor and add to correct files ------
const session = require("express-session");
const passport = require("passport");
const { authenticate } = require("passport");
require("../passport/setup")(passport);

// Enable sessions
router.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
  })
);

// Passport setup
router.use(passport.initialize());
router.use(passport.session());

// Register all passport strategies
require("../passport/strategies").register(passport);

// Consent screen
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email"] })
);

// Authorized redirect (defined in Google Developer Console)
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect to the app.
    res.redirect("/");
  }
);

// Index page
router.get("/", async (req, res) => {
  const user = await req.user;
  if (user) {
    res.send(`
    <div style="display:flex; justify-content:center; align-items:center; height: 100vh">
      <div style="text-align:center">
        <h1 style="font-size: 32px">
          Welcome back ${user.name}!
        </h1>
        <a href="/logout">
          <button style="font-size: 32px; padding:0.5em">
            Log out
          </button>
        </a>
      </div>
    </div>
    `);
  } else {
    res.redirect("/login");
  }
});

// login user
router.get("/login", (req, res) => {
  if (req.user) {
    res.redirect("/");
  } else {
    res.send(`
      <div style="display:flex; justify-content:center; align-items:center; height: 100vh">
        <a href="/auth/google">
          <button style="font-size: 32px; padding:0.5em">
            Sign in with Google
          </button>
        </a>
      </div>
    `);
  }
});

// log out user ((((!! STATUS 500 !!)))
router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
// -------------------------------------------

router.post("/hello", testController);
router.post("/user/createUser", createUser);
router.patch("/user/resetPassword", resetPassword);
router.post("/user/findAllUserModules", findAllUserModules);

router.post("/module/getAllModules", getAllModules);

router.post("/module/createModule", createModule);

router.use(unresolvedPathHandler);
router.use(errorHandler);

module.exports = router;
