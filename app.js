const express = require("express");
const morgan = require("morgan");
const routes = require("./app/routes/main");

require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: false }));

// Request logging
app.use(morgan("tiny"));

app.use(routes);

app.listen(Number(process.env.PORT) || 3000, () =>
  console.log(`App is listening on port ${Number(process.env.PORT) || 3000}.`)
);

return app;
