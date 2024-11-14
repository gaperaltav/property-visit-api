import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

export const allowedResource = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.url.includes("/auth") && !req.url.includes("/api/users")) {
    const token = req.header("x-auth-token");

    if (!token) {
      return res.status(401).json("Access denied . No token provided.");
    }

    try {
      const verifyUser = jwt.verify(token, config.jwtSecretKey);
      req.user = verifyUser;

      return next();
    } catch (error) {
      return res.status(401).json('Invalid Token');
    }
  }
  next();
};
