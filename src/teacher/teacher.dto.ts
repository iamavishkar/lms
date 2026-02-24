import { IsNumber, IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class TeacherDto {
  @IsNumber()
  userId: number;

  @IsString()
  @IsNotEmpty()
  employeeId: string;

  @IsString()
  @IsOptional()
  specialization?: string;

  @IsString()
  @IsOptional()
  qualifications?: string;

  @IsDateString()
  @IsOptional()
  joiningDate?: string;
}
