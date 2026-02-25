import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
} from "class-validator";

export class TeacherDto {
  @IsNumber({}, { message: "userId must be a valid number" })
  userId: number;

  @IsString({ message: "employeeId must be a string" })
  @IsNotEmpty({ message: "employeeId is required" })
  employeeId: string;

  @IsString({ message: "specialization must be a string" })
  @IsOptional()
  specialization?: string;

  @IsString({ message: "qualifications must be a string" })
  @IsOptional()
  qualifications?: string;

  @IsDateString(
    {},
    {
      message:
        "joiningDate must be a valid ISO 8601 date string (e.g. 2024-01-31)",
    },
  )
  @IsOptional()
  joiningDate?: string;
}
