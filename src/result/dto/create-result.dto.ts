import { IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateResultDto {
  @ApiProperty()
  @IsNumber()
  studentId: number;

  @ApiProperty()
  @IsNumber()
  examId: number;

  @ApiProperty()
  @IsNumber()
  marksObtained: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  grade?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  remarks?: string;
}
