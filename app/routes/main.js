const router = require("express").Router();

// import middlewares
const {
  unresolvedPathHandler,
  errorHandler,
} = require("../middlewares/error_handlers");

// const { test } = require("../middlewares/test");

// import controllers
const { testController } = require("../controllers/main");

const {
  createUser,
  resetPassword,
  findAllUserModules,
} = require("../controllers/user");

const { createModule, getAllModules } = require("../controllers/module");

// import all routers
const userRoutes = require("./user.routes");

// main routes (REFACTOR)
router.get("/test", (_req, res, _next) => res.send("Hello world"));
router.get("/connection", (_req, res, _next) =>
  res.send({ message: "Hello from the server :))" })
);
router.use("/user", userRoutes);
router.post("/hello", testController);
router.post("/user/createUser", createUser);
router.patch("/user/resetPassword", resetPassword);
router.post("/user/findAllUserModules", findAllUserModules);

router.post("/module/getAllModules", getAllModules);

router.post("/module/createModule", createModule);

// -- refactor and add to correct files ------
const session = require("express-session");
const passport = require("passport");
require("../passport/setup")(passport);

// enable sessions
router.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
  })
);

// passport setup
router.use(passport.initialize());
router.use(passport.session());

// register all passport strategies
require("../passport/strategies").register(passport);

// consent screen
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email"] })
);

// authorized redirect
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // successful authentication, redirect to the app.
    res.redirect("/");
  }
);

// main route
router.get("/", async (req, res, _next) => {
  const user = await req.user;
  if (user) {
    res.status(200).json(user);
  } else {
    res.redirect("/login");
  }
});

// login user
router.get("/login", async (req, res, _next) => {
  const user = await req.user;
  if (user) {
    res.redirect("/");
  } else {
    res.status(200).json(user);
  }
});

// log out user
router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
// -------------------------------------------

router.use(unresolvedPathHandler);
router.use(errorHandler);

module.exports = router;
