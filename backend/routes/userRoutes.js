import express from "express";
import {
  getAllUsers,
  Login,
  Logout,
  Register,
  deleteUser,
} from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/token", refreshToken);
router.get("/api/users", verifyToken, getAllUsers);
router.post("/api/users/register",Register);
router.get("/api/users/login", Login);
router.delete("/api/users/logout", verifyToken, Logout);
router.delete("/api/users/:id", verifyToken, deleteUser);

export default router;
