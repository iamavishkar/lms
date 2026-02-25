import { JwtModuleOptions } from "@nestjs/jwt";

export const jwtConfig = (): JwtModuleOptions => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is not set");
  }
  return {
    secret,
    signOptions: {
      expiresIn: process.env.JWT_EXPIRATION || "1d",
    },
  };
};
