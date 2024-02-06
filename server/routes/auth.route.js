import express from "express";
import { login, signup, googleAuth } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/sign-up", signup);
router.post("/log-in", login);
router.post("/google", googleAuth);

export default router;
