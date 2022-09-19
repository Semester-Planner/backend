const express = require("express");
const morgan = require("morgan");
const routes = require("./app/routes/main");
const db = require("./app/db/models");

require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: false }));

// Request logging
app.use(morgan("tiny"));

app.use(routes);

db.sequelize.sync({ alter: true });

app.listen(Number(process.env.PORT) || 3001, () =>
  console.log(`App is listening on port ${Number(process.env.PORT) || 3001}.`)
);

return app;
