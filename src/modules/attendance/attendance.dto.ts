import {
  IsNumber,
  IsString,
  IsOptional,
  IsDateString,
  IsEnum,
} from 'class-validator';
import { AttendanceStatusEnum } from 'src/common/enums/attendance.enum';

export class AttendanceDto {
  @IsNumber({}, { message: 'studentId must be a valid number' })
  studentId: number;

  @IsNumber({}, { message: 'classId must be a valid number' })
  classId: number;

  @IsNumber({}, { message: 'subjectId must be a valid number' })
  @IsOptional()
  subjectId?: number;

  @IsDateString(
    {},
    { message: 'date must be a valid ISO 8601 date string (e.g. 2024-01-31)' },
  )
  date: string;

  @IsEnum(AttendanceStatusEnum, {
    message: `status must be one of the following: ${Object.values(AttendanceStatusEnum).join(', ')}`,
  })
  status: AttendanceStatusEnum;

  @IsString({ message: 'remarks must be a string' })
  @IsOptional()
  remarks?: string;
}
