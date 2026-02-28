import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class ClassDto {
  @IsString({ message: 'name must be a string' })
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @IsString({ message: 'section must be a string' })
  @IsOptional()
  section?: string;

  @IsString({ message: 'academicYear must be a string' })
  @IsOptional()
  academicYear?: string;

  @IsNumber({}, { message: 'teacherId must be a valid number' })
  @IsOptional()
  teacherId?: number;
}
