import { IsNumber, IsString, IsNotEmpty, IsDateString } from "class-validator";

export class StudentDto {
  @IsNumber({}, { message: "userId must be a valid number" })
  userId: number;

  @IsString({ message: "enrollmentNumber must be a string" })
  @IsNotEmpty({ message: "enrollmentNumber is required" })
  enrollmentNumber: string;

  @IsString({ message: "class must be a string" })
  @IsNotEmpty({ message: "class is required" })
  class: string;

  @IsDateString(
    {},
    {
      message:
        "dateOfBirth must be a valid ISO 8601 date string (e.g. 2000-01-31)",
    },
  )
  dateOfBirth: string;

  @IsString({ message: "address must be a string" })
  @IsNotEmpty({ message: "address is required" })
  address: string;

  @IsString({ message: "phoneNumber must be a string" })
  @IsNotEmpty({ message: "phoneNumber is required" })
  phoneNumber: string;
}
