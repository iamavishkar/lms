import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'email must be a valid email address' })
  email: string;

  @IsString({ message: 'password must be a string' })
  @IsNotEmpty({ message: 'password is required' })
  password: string;
}

export class RegisterDto {
  @IsEmail({}, { message: 'email must be a valid email address' })
  email: string;

  @IsString({ message: 'password must be a string' })
  @IsNotEmpty({ message: 'password is required' })
  password: string;

  @IsString({ message: 'firstName must be a string' })
  @IsNotEmpty({ message: 'firstName is required' })
  firstName: string;

  @IsString({ message: 'lastName must be a string' })
  @IsNotEmpty({ message: 'lastName is required' })
  lastName: string;

  @IsNumber({}, { message: 'roleId must be a number' })
  @IsOptional()
  roleId?: number;
}
