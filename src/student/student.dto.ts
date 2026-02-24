import { IsNumber, IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class StudentDto {
  @IsNumber()
  userId: number;

  @IsString()
  @IsNotEmpty()
  enrollmentNumber: string;

  @IsString()
  @IsOptional()
  class?: string;

  @IsDateString()
  @IsOptional()
  dateOfBirth?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;
}
