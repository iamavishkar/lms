import { IsNumber, IsString, IsOptional } from 'class-validator';

export class ParentDto {
  @IsNumber()
  userId: number;

  @IsString()
  @IsOptional()
  occupation?: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;
}
