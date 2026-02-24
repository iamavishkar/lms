import { IsString, IsNotEmpty, IsOptional, IsNumber, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExamDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  examType?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  subjectId?: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  classId?: number;

  @ApiProperty({ required: false })
  @IsDateString()
  @IsOptional()
  date?: Date;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  totalMarks?: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  duration?: number;
}
