const ApiError = require("../errors/ApiError");

const errorHandler = (err, req, res, next) => {
  const { code, data } = ApiError.getInfo(err);

  res.status(code).json(data);
};

module.exports = errorHandler;
