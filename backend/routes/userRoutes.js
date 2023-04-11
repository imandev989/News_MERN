import express from "express";
import { getAllUsers, Login, Register } from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();
router.get("/token", refreshToken);

router.get("/api/users", verifyToken, getAllUsers);
router.post("/api/users/register", Register);
router.get("/api/users/login", Login);

export default router;
