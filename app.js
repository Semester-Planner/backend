const express = require("express");
const morgan = require("morgan");
const routes = require("./app/routes/main");
const db = require("./app/db/models");
const session = require("express-session");
const passport = require("passport");

require("./app/passport/setup")(passport);
require("./app/passport/strategies").register(passport);
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: false }));

// request logging
app.use(morgan("tiny"));

// enable sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
  })
);

// passport setup
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

db.sequelize.sync({ alter: true });

app.listen(Number(process.env.PORT) || 3001, () =>
  console.log(`App is listening on port ${Number(process.env.PORT) || 3001}.`)
);

return app;
