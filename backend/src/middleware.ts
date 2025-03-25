import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization || req.headers["authorization"];
  const decodedData = jwt.verify(header as string, JWT_SECRET);
  if (decodedData) {
    // @ts-ignore
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "user not signed in",
    });
  }
};
