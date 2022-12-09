import { Module } from '@nestjs/common';
import { DishesService } from './dishes/dishes.service';
import { ProductsService } from './products/products.service';
import { DishesController } from './dishes/dishes.controller';
import { ProductsController } from './products/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/Product';
import { Dish } from './dishes/Dish';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Dish])],
  controllers: [DishesController, ProductsController],
  providers: [DishesService, ProductsService],
})
export class RecipeModule {}
