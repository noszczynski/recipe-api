import { UpdateProductDto } from './update-product.dto';
import { OmitType } from '@nestjs/mapped-types';
export class CreateProductDto extends OmitType(UpdateProductDto, [
  'id',
] as const) {}
