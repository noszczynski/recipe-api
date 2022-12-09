import { Module } from '@nestjs/common';
import { DishesService } from './dishes/dishes.service';
import { ProductsService } from './products/products.service';
import { DishesController } from './dishes/dishes.controller';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [],
  controllers: [DishesController, ProductsController],
  providers: [DishesService, ProductsService],
})
export class RecipeModule {}
