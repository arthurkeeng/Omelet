const {
  updateUser,
  createUser,
  deleteUser,
  getUser,
  getProfile,
} = require("../controllers/UserController");
const express = require("express");

const router = express.Router();

router.route("/login").post(getUser);
router.route("/profile").get(getProfile);
router.route("/register").post(createUser);

router.route("/:userID").patch(updateUser).delete(deleteUser);

module.exports = router;
