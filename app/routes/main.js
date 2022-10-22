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
  // createUser,
  resetPassword,
  findAllUserModules,
} = require("../controllers/user");

const { createModule, getAllModules } = require("../controllers/module");

// import all routers
const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");

// main routes (REFACTOR)
router.use("/user", userRoutes);
router.use("/auth", authRoutes);

//router.post("/hello", testController);
//router.post("/user/createUser", createUser);
//router.patch("/user/resetPassword", resetPassword);

router.post("/user/findAllUserModules", findAllUserModules);
router.post("/module/getAllModules", getAllModules);
router.post("/module/createModule", createModule);

// -- refactor and add to correct files ------

// main route
router.get("/", async (req, res, _next) => {
  console.log("successful get / - redirect to to /login");
  const user = await req.user;
  if (user) {
    res.status(200).json(user);
  } else {
    res.redirect("/login");
  }
});

// login user
router.get("/login", async (req, res, _next) => {
  console.log("successful /login - redirect to /");
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
