import { Module } from '@nestjs/common';
import { DishesController } from '../dishes/dishes.controller';
import { ProductsController } from '../products/products.controller';
import { AppController } from './app.controller';
import { DishesService } from '../dishes/dishes.service';
import { ProductsService } from '../products/products.service';

@Module({
  imports: [],
  controllers: [AppController, DishesController, ProductsController],
  providers: [DishesService, ProductsService],
})
export class AppModule {}
