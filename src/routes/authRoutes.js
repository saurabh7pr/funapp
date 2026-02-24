const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  register,
  login,
  logout,
  getMe,
  updateMe,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", authMiddleware, getMe);
router.put("/me", authMiddleware, updateMe);

module.exports = router;