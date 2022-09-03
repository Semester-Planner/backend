const express = require("express");
const morgan = require("morgan");

require("dotenv").config();

const app = express();

// Request logging
app.use(morgan("tiny"));

app.get("/", (req, res, next) => res.send("Hello world!"));

app.listen(Number(process.env.PORT) || 3000, () =>
  console.log(`App is listening on port ${Number(process.env.PORT) || 3000}.`)
);

return app;
