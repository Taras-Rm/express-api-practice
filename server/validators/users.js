const { body } = require("express-validator");
const validate = require("../middlewares/validation");

const nameValidator = body("name")
  .trim()
  .notEmpty()
  .withMessage("name is required")
  .isLength({ min: 3, max: 100 })
  .withMessage("name must be (min 3, max 100)");

const emailValidator = body("email")
  .trim()
  .notEmpty()
  .withMessage("email is required")
  .isEmail()
  .withMessage("invalid email");

const ageValidator = body("age")
  .notEmpty()
  .withMessage("age is required")
  .isInt({ min: 1, max: 200 })
  .withMessage("age must be integer number (min 1, max 200)");

const createUserValidator = validate([
  nameValidator,
  emailValidator,
  ageValidator,
]);

const updateUserValidator = validate([
  nameValidator,
  emailValidator,
  ageValidator,
]);

module.exports = { createUserValidator, updateUserValidator };
