const { Router } = require("express");
const {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/users");
const checkUserId = require("../middlewares/checkUserId");
const {
  createUserValidator,
  updateUserValidator,
} = require("../validators/users");

const router = Router();

router.post("/", createUserValidator, createUser);
router.get("/:id", checkUserId, getUser);
router.get("/", getUsers);
router.put("/:id", updateUserValidator, checkUserId, updateUser);
router.delete("/:id", checkUserId, deleteUser);

module.exports = router;
