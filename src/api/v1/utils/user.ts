import jwt, { Secret } from "jsonwebtoken";

export const SECRET_KEY: Secret = process.env.JWT_SECRET ?? "";

const getUserFromToken = (token: string | null) =>
  token &&
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      throw new Error("User is not authenticated");
    }
    // @ts-expect-error user is added to decoded
    return decoded.user;
  });

export default getUserFromToken;
