import { IsNumber, IsString, IsOptional } from "class-validator";

export class ParentDto {
  @IsNumber({}, { message: "userId must be a valid number" })
  userId: number;

  @IsString({ message: "occupation must be a string" })
  @IsOptional()
  occupation?: string;

  @IsString({ message: "phoneNumber must be a string" })
  @IsOptional()
  phoneNumber?: string;
}
