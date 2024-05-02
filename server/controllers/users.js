const User = require("../db/users");
const ApiError = require("../errors/ApiError");
const HTTP_STATUSES = require("../utils/httpStatuses");

// create new user
// POST api/users
const createUser = async (req, res, next) => {
  try {
    const { name, email, age } = req.body;

    const existingUser = await User.getByEmail(email);
    if (existingUser) {
      throw new ApiError(
        HTTP_STATUSES.BAD_REQUEST,
        "existing email",
        `User with email: ${email} already exists`
      );
    }

    const newUser = await User.create({ name, email, age });

    res.status(HTTP_STATUSES.CREATED).json(newUser);
  } catch (error) {
    next(error);
  }
};

// get user
// GET api/users/:id
const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.getById(id);

    res.status(HTTP_STATUSES.OK).json(user);
  } catch (error) {
    next(error);
  }
};

// get all users
// GET api/users
const getUsers = async (req, res, next) => {
  try {
    const users = await User.getAll();

    res.status(HTTP_STATUSES.OK).json(users);
  } catch (error) {
    next(error);
  }
};

// update user
// PUT api/users/:id
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const existingUser = await User.getByEmail(email);
    if (existingUser && String(existingUser.id) !== String(id)) {
      throw new ApiError(
        HTTP_STATUSES.BAD_REQUEST,
        "existing email",
        `User with email: ${email} already exists`
      );
    }

    const updatedUser = await User.updateById(id, { name, email, age });

    res.status(HTTP_STATUSES.OK).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// delete user
// DELETE api/users/:id
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    await User.deleteById(id);

    res.status(HTTP_STATUSES.OK).json({ message: "success" });
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, getUser, getUsers, updateUser, deleteUser };
