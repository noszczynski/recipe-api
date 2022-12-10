import { IsNumber, IsString, IsOptional, IsBoolean } from 'class-validator';

export class UpdateDishDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsNumber({}, { message: 'Servings must be a number' })
  servings: number;

  @IsString()
  slug: string;

  @IsBoolean()
  isPublic: boolean;

  @IsOptional()
  @IsString()
  description?: string;
}
