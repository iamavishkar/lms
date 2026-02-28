import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class ExamDto {
  @IsString({ message: 'name must be a string' })
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @IsString({ message: 'examType must be a string' })
  @IsOptional()
  examType?: string;

  @IsNumber({}, { message: 'subjectId must be a valid number' })
  @IsOptional()
  subjectId?: number;

  @IsNumber({}, { message: 'classId must be a valid number' })
  @IsOptional()
  classId?: number;

  @IsDateString(
    {},
    { message: 'date must be a valid ISO 8601 date string (e.g. 2024-01-31)' },
  )
  @IsOptional()
  date?: string;

  @IsNumber({}, { message: 'totalMarks must be a valid number' })
  @IsOptional()
  totalMarks?: number;

  @IsNumber({}, { message: 'duration must be a valid number' })
  @IsOptional()
  duration?: number;
}
