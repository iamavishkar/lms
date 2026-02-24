import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class RoleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
