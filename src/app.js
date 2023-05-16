const express = require("express");
const mainRouter = require("./routes/index");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(mainRouter);

module.exports = app;
