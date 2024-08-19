import { Request } from "express";

const getTokenFromHeader = (req: Request) => {
  const authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && (authHeader as string).split(" ")[0] === "Bearer") {
    return (authHeader as string).split(" ")[1];
  }
  return null;
};

export default getTokenFromHeader;
