import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class SubjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  classId?: number;

  @IsNumber()
  @IsOptional()
  teacherId?: number;
}
