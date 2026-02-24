import { IsNumber, IsString, IsOptional, IsDateString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAttendanceDto {
  @ApiProperty()
  @IsNumber()
  studentId: number;

  @ApiProperty()
  @IsNumber()
  classId: number;

  @ApiProperty()
  @IsDateString()
  date: Date;

  @ApiProperty({ enum: ['present', 'absent', 'late'] })
  @IsEnum(['present', 'absent', 'late'])
  status: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  remarks?: string;
}
