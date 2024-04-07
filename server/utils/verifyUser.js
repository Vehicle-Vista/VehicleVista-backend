import { ErrorHandler } from "./error.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(ErrorHandler(401, "Unauthorized"));

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) return next(ErrorHandler(403, "Forbidden"));

    req.user = user;
    next();
  });
};
