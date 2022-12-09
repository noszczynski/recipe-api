import { Module } from '@nestjs/common';
import { DishesService } from './dishes/dishes.service';
import { ProductsService } from './products/products.service';
import { DishesController } from './dishes/dishes.controller';
import { ProductsController } from './products/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/product.entity';
import { Dish } from './dishes/dish.entity';
import { IngredientsController } from './ingredients/ingredients.controller';
import { IngredientsService } from './ingredients/ingredients.service';
import { Ingredient } from './ingredients/ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Dish, Ingredient])],
  controllers: [DishesController, ProductsController, IngredientsController],
  providers: [DishesService, ProductsService, IngredientsService],
})
export class RecipeModule {}
