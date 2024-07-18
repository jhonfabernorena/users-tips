import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional, IsArray, IsDateString } from 'class-validator';

export class CreateTipDto {
  @ApiProperty({ description: 'The unique identifier for the tip' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'The title of the tip' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'The body content of the tip' })
  @IsString()
  body: string;

  @ApiProperty({ description: 'The URL of the image associated with the tip', required: false })
  @IsOptional()
  @IsString()
  img_url: string;

  @ApiProperty({ description: 'The link associated with the tip', required: false })
  @IsOptional()
  @IsString()
  link: string;

  @ApiProperty({ description: 'Whether the tip is available' })
  @IsBoolean()
  available: boolean;

  @ApiProperty({ description: 'Levels associated with the tip', type: [String], required: false })
  @IsOptional()
  @IsArray()
  level: string[];

  @ApiProperty({ description: 'Technologies associated with the tip', type: [String], required: false })
  @IsOptional()
  @IsArray()
  technology: string[];

  @ApiProperty({ description: 'Subtechnologies associated with the tip', type: [String], required: false })
  @IsOptional()
  @IsArray()
  subtechnology: string[];

  @ApiProperty({ description: 'Languages associated with the tip', type: [String], required: false })
  @IsOptional()
  @IsArray()
  lang: string[];

  @ApiProperty({ description: 'Creation timestamp of the tip', required: false })
  @IsOptional()
  @IsDateString()
  createdAt: Date;

  @ApiProperty({ description: 'User who created the tip', required: false })
  @IsOptional()
  @IsString()
  createBy: string;

  @ApiProperty({ description: 'Update timestamp of the tip', required: false })
  @IsOptional()
  @IsDateString()
  updatedAt: Date;

  @ApiProperty({ description: 'User who updated the tip', required: false })
  @IsOptional()
  @IsString()
  updateBy: string;

  @ApiProperty({ description: 'Deletion timestamp of the tip', required: false })
  @IsOptional()
  @IsDateString()
  deletedAt: Date;

  @ApiProperty({ description: 'User who deleted the tip', required: false })
  @IsOptional()
  @IsString()
  deleteBy: string;
}
