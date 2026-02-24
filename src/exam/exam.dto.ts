import { IsString, IsNotEmpty, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class ExamDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  examType?: string;

  @IsNumber()
  @IsOptional()
  subjectId?: number;

  @IsNumber()
  @IsOptional()
  classId?: number;

  @IsDateString()
  @IsOptional()
  date?: string;

  @IsNumber()
  @IsOptional()
  totalMarks?: number;

  @IsNumber()
  @IsOptional()
  duration?: number;
}
