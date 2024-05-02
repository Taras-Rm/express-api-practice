const ApiError = require("../errors/ApiError");
const logger = require("../logger/logger");

const errorHandler = (err, req, res, next) => {
  const { code, data } = ApiError.getInfo(err);

  logger.error(`Error: ${data.message}`);
  res.status(code).json(data);
};

module.exports = errorHandler;
