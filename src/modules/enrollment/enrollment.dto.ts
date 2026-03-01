import { IsNumber, IsOptional } from 'class-validator';

export class EnrollmentDto {
  @IsNumber({}, { message: 'studentId must be a valid number' })
  studentId: number;

  @IsNumber({}, { message: 'subjectId must be a valid number' })
  subjectId: number;

  @IsNumber({}, { message: 'termId must be a valid number' })
  termId: number;

  @IsNumber({}, { message: 'classId must be a valid number' })
  @IsOptional()
  classId?: number;
}

export class BulkEnrollmentDto {
  @IsNumber({}, { each: true, message: 'studentIds must be an array of numbers' })
  studentIds: number[];

  @IsNumber({}, { message: 'subjectId must be a valid number' })
  subjectId: number;

  @IsNumber({}, { message: 'termId must be a valid number' })
  termId: number;

  @IsNumber({}, { message: 'classId must be a valid number' })
  @IsOptional()
  classId?: number;
}
