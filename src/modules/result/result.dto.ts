import { IsNumber, IsString, IsOptional } from 'class-validator';

export class ResultDto {
  @IsNumber({}, { message: 'studentId must be a valid number' })
  studentId: number;

  @IsNumber({}, { message: 'examId must be a valid number' })
  examId: number;

  @IsNumber({}, { message: 'marksObtained must be a valid number' })
  marksObtained: number;

  @IsString({ message: 'grade must be a string' })
  @IsOptional()
  grade?: string;

  @IsString({ message: 'remarks must be a string' })
  @IsOptional()
  remarks?: string;
}
