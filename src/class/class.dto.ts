import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class ClassDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  section?: string;

  @IsString()
  @IsOptional()
  academicYear?: string;

  @IsNumber()
  @IsOptional()
  teacherId?: number;
}
