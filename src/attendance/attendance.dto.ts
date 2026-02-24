import { IsNumber, IsString, IsOptional, IsDateString, IsEnum } from 'class-validator';

export class AttendanceDto {
  @IsNumber()
  studentId: number;

  @IsNumber()
  classId: number;

  @IsDateString()
  date: string;

  @IsEnum(['present', 'absent', 'late'])
  status: string;

  @IsString()
  @IsOptional()
  remarks?: string;
}
