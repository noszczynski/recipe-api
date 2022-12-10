import { IsNumber, IsString } from 'class-validator';
import { ProductUnit } from '../product.entity';

export class UpdateProductDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  unit: ProductUnit;
}
