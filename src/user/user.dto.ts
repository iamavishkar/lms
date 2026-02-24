import { IsEmail, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsOptional()
  role?: string;
}
