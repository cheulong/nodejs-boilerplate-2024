import asyncHandler from "express-async-handler";
import getTokenFromHeader from "../utils/auth.js";
import getUserFromToken from "../utils/user.js";
import { NextFunction, Request, Response } from "express";

const validateTokenHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = getTokenFromHeader(req);
    if (!token) {
      res.status(401).json({ error: "Unauthorized" });
    }
    try {
      const user = await getUserFromToken(token);
      //@ts-expect-error user is added to req
      req.user = user;
      next();
    } catch (err) {
      res.status(401);
      throw new Error("User is not authenticated");
    }
  },
);

export default validateTokenHandler;
