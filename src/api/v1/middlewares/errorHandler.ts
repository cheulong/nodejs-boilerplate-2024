import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { constants } from "../../../config/constants";
import { Error } from "mongoose";

const {
  VALIDATION_ERROR,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = constants;

const errorHandler: ErrorRequestHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof Error.CastError) {
    return res.status(VALIDATION_ERROR).json({
      title: "Invalid ID format",
      message: err.message,
      stackTrace: err.stack,
    });
  }
  const statusCode = res.statusCode ?? INTERNAL_SERVER_ERROR;
  if (err instanceof Error) {
    switch (statusCode) {
      case VALIDATION_ERROR:
        return res.status(VALIDATION_ERROR).json({
          title: "Validation Error",
          message: err.message,
          stackTrace: err.stack,
        });
      case UNAUTHORIZED:
        return res.status(UNAUTHORIZED).json({
          title: "Unauthorized",
          message: err.message,
          stackTrace: err.stack,
        });
      case FORBIDDEN:
        return res.status(FORBIDDEN).json({
          title: "Forbidden",
          message: err.message,
          stackTrace: err.stack,
        });
      case NOT_FOUND:
        return res.status(NOT_FOUND).json({
          title: "Not Found",
          message: err.message,
          stackTrace: err.stack,
        });
      case INTERNAL_SERVER_ERROR:
        return res.status(INTERNAL_SERVER_ERROR).json({
          title: "Internal Server Error",
          message: err.message,
          stackTrace: err.stack,
        });
      default:
        console.log("No error");
        break;
    }
  }
};

export default errorHandler;
