import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsDateString,
} from 'class-validator';

export class TermDto {
  @IsString({ message: 'name must be a string' })
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @IsString({ message: 'code must be a string' })
  @IsNotEmpty({ message: 'code is required' })
  code: string;

  @IsDateString(
    {},
    {
      message:
        'startDate must be a valid ISO 8601 date string (e.g. 2024-01-31)',
    },
  )
  startDate: string;

  @IsDateString(
    {},
    {
      message: 'endDate must be a valid ISO 8601 date string (e.g. 2024-06-30)',
    },
  )
  endDate: string;

  @IsBoolean({ message: 'isActive must be a boolean' })
  @IsOptional()
  isActive?: boolean;
}
