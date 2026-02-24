import { IsNumber, IsString, IsOptional } from 'class-validator';

export class ResultDto {
  @IsNumber()
  studentId: number;

  @IsNumber()
  examId: number;

  @IsNumber()
  marksObtained: number;

  @IsString()
  @IsOptional()
  grade?: string;

  @IsString()
  @IsOptional()
  remarks?: string;
}
