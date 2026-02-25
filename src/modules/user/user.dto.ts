import { IsEmail, IsString, IsNotEmpty, IsOptional } from "class-validator";

export class UserDto {
  @IsEmail({}, { message: "email must be a valid email address" })
  email: string;

  @IsString({ message: "password must be a string" })
  @IsOptional()
  password?: string;

  @IsString({ message: "firstName must be a string" })
  @IsNotEmpty({ message: "firstName is required" })
  firstName: string;

  @IsString({ message: "lastName must be a string" })
  @IsNotEmpty({ message: "lastName is required" })
  lastName: string;

  @IsString({ message: "role must be a string" })
  @IsOptional()
  role?: string;
}
