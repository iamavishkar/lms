import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "../auth/auth.service";
import { AuthController } from "../auth/auth.controller";
import { JwtStrategy } from "../auth/jwt.strategy";
import { UserModule } from "./user.module";

@Module({
  imports: [UserModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
