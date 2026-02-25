import {
  IsNumber,
  IsString,
  IsOptional,
  IsDateString,
  IsEnum,
} from "class-validator";

export class AttendanceDto {
  @IsNumber({}, { message: "studentId must be a valid number" })
  studentId: number;

  @IsNumber({}, { message: "classId must be a valid number" })
  classId: number;

  @IsDateString(
    {},
    { message: "date must be a valid ISO 8601 date string (e.g. 2024-01-31)" },
  )
  date: string;

  @IsEnum(["present", "absent", "late"], {
    message: "status must be one of: present, absent, late",
  })
  status: string;

  @IsString({ message: "remarks must be a string" })
  @IsOptional()
  remarks?: string;
}
