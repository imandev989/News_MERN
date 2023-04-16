import express from "express";
import { getAllUsers, Login, Logout, Register } from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();
router.get("/token", refreshToken);

router.get("/api/users", verifyToken, getAllUsers);
router.post("/api/users/register", verifyToken, Register);
router.get("/api/users/login", Login);
router.delete("/api/users/logout", verifyToken, Logout);

export default router;
