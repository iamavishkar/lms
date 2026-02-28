import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class SubjectDto {
  @IsString({ message: 'name must be a string' })
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @IsString({ message: 'code must be a string' })
  @IsNotEmpty({ message: 'code is required' })
  code: string;

  @IsString({ message: 'description must be a string' })
  @IsOptional()
  description?: string;

  @IsNumber({}, { message: 'classId must be a valid number' })
  @IsOptional()
  classId?: number;

  @IsNumber({}, { message: 'teacherId must be a valid number' })
  @IsOptional()
  teacherId?: number;
}
