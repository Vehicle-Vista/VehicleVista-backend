import express from "express";
import { login, signup } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/sign-up", signup);
router.post("/log-in", login);

export default router;
