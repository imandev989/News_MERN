import express from "express";
import { getAllUsers, Login, Register } from "../controllers/UserController.js";

const router = express.Router();

router.get("/api/users", getAllUsers);
router.post("/api/users/register", Register);
router.get("/api/users/login", Login);



export default router;
