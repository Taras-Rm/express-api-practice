const { validationResult } = require("express-validator");
const HTTP_STATUSES = require("../utils/httpStatuses");
const ApiError = require("../errors/ApiError");

const validate = (validations) => {
  return async function (req, res, next) {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    // for while take only first validation error message
    const message = errors.array()[0].msg;

    next(new ApiError(HTTP_STATUSES.SERVER_ERROR, "invalid data", message));
  };
};

module.exports = validate;
