import express from "express";
import {
  login,
  signup,
  googleAuth,
  signOut,
} from "../controller/auth.controller.js";

const router = express.Router();

router.post("/sign-up", signup);
router.post("/log-in", login);
router.post("/google", googleAuth);
router.get("/sign-out", signOut);

export default router;
