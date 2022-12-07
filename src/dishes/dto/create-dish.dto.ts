import { UpdateDishDto } from './update-dish.dto';
import { OmitType } from '@nestjs/mapped-types';
export class CreateDishDto extends OmitType(UpdateDishDto, ['id'] as const) {}
