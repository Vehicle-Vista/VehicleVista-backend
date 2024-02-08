import { ErrorHandler } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(ErrorHandler(401, "Unauthorized"));

  jwt.verify(token, "eqoiruvfjdaf239412", (error, user) => {
    if (error) return next(ErrorHandler(403, "Forbidden"));

    req.user = user;
    next();
  });
};
