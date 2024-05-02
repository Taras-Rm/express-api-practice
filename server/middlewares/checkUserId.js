const db = require("../db/users");
const ApiError = require("../errors/ApiError");
const HTTP_STATUSES = require("../utils/httpStatuses");

const checkUserId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await db.getById(id);

    if (!user) {
      throw new ApiError(
        HTTP_STATUSES.BAD_REQUEST,
        "Bad request",
        `invalid user id: ${id}`
      );
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkUserId;
