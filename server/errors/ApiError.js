const HTTP_STATUSES = require("../utils/httpStatuses");

class ApiError {
  constructor(code, status, message) {
    this.code = code;
    this.status = status;
    this.message = message;
  }

  static getInfo(err) {
    const error =
      err instanceof ApiError
        ? err
        : new ApiError(HTTP_STATUSES.SERVER_ERROR, "some server error");

    return {
      code: error.code,
      data: {
        status: error.status,
        message: error.message,
      },
    };
  }
}

module.exports = ApiError;
