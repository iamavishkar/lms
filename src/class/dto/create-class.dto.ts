import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClassDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  section?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  academicYear?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  teacherId?: number;
}
