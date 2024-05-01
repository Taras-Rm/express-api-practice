const { Router } = require("express");
const {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/users");
const checkUserId = require("../middlewares/checkUserId");

const router = Router();

router.post("/", createUser);
router.get("/:id", checkUserId, getUser);
router.get("/", getUsers);
router.put("/:id", checkUserId, updateUser);
router.delete("/:id", checkUserId, deleteUser);

module.exports = router;
