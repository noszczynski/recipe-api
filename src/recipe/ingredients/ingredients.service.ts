import { Injectable } from '@nestjs/common';
import { DishesService } from '../dishes/dishes.service';

@Injectable()
export class IngredientsService {
  constructor(private dishService: DishesService) {}
}
