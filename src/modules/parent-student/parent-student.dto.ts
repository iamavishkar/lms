import { IsNumber, IsString, IsBoolean, IsOptional } from 'class-validator';

export class ParentStudentDto {
  @IsNumber({}, { message: 'parentId must be a valid number' })
  parentId: number;

  @IsNumber({}, { message: 'studentId must be a valid number' })
  studentId: number;

  @IsString({ message: 'relationship must be a string' })
  @IsOptional()
  relationship?: string;

  @IsBoolean({ message: 'isPrimary must be a boolean' })
  @IsOptional()
  isPrimary?: boolean;
}
