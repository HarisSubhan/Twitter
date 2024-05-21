const express = require("express");
const {
  registerUser,
  loginUser,
  findMyProfile,
  findAllUsers,
} = require("../controllers/registerUser");

const router = express.Router();

router.post("/register-user", registerUser);
router.post("/userlogin", loginUser);
router.get("/myprofile/:id", findMyProfile);
router.get("/find-all-users", findAllUsers);

module.exports = router;
