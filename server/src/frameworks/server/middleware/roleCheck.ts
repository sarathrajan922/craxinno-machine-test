import { NextFunction, Response } from "express";
import { CustomRequest } from "../../../types/expressRequest";
import AppError from "../../../utils/appError";
import { HttpStatus } from "../../../types/httpStatus";

export const userRoleCheckMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  
  const role = req.payload?.role;
  if (role === "user") {
    next();
  } else {
    throw new AppError("Unauthorized role", HttpStatus.UNAUTHORIZED);
  }
};
