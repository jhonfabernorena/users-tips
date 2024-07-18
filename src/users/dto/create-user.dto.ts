import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class EmailPreferencesDto {
  @ApiProperty()
  @IsString()
  frequency: string;

  @ApiProperty()
  @IsString()
  seniority: string;

  @ApiProperty()
  @IsObject()
  programmingLanguages: Record<string, unknown>;
}

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  role: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => EmailPreferencesDto)
  emailPreferences: EmailPreferencesDto;
}
