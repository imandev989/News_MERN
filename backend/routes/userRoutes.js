import express from "express";
import { getAllUsers, Register } from "../controllers/UserController.js";

const router = express.Router();

router.get("/api/users", getAllUsers);
router.post("/api/users/Register", Register);


export default router;
