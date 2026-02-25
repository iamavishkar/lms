import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class RoleDto {
  @IsString({ message: "name must be a string" })
  @IsNotEmpty({ message: "name is required" })
  name: string;

  @IsString({ message: "description must be a string" })
  @IsOptional()
  description?: string;
}
