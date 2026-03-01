import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
} from 'class-validator';

export class CreateTermDto {
  @IsString({ message: 'name must be a string' })
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @IsString({ message: 'code must be a string' })
  @IsNotEmpty({ message: 'code is required' })
  code: string;

  @IsString()
  startDate: string;

  @IsString()
  endDate: string;
}

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
  @IsArray()
  @IsNumber({}, { each: true })
  studentIds: number[];

  @IsNumber({}, { message: 'subjectId must be a valid number' })
  subjectId: number;

  @IsNumber({}, { message: 'termId must be a valid number' })
  termId: number;

  @IsNumber({}, { message: 'classId must be a valid number' })
  @IsOptional()
  classId?: number;
}

export class PromoteStudentDto {
  @IsNumber({}, { message: 'newClassId must be a valid number' })
  newClassId: number;

  @IsNumber({}, { message: 'termId must be a valid number' })
  termId: number;
}

export class AssignTeacherDto {
  @IsNumber({}, { message: 'teacherId must be a valid number' })
  teacherId: number;
}
