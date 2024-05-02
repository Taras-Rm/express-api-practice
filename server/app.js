const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const requestLogger = require("./middlewares/requestLogger");
const logger = require("./logger/logger");

const app = express();

app.use(cors());

app.use(express.json());

app.use(requestLogger(logger));

app.use("/api", routes);

app.use(errorHandler);

module.exports = app;
