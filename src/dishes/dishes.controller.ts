import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateDishDto } from './dto/update-dish.dto';
import { CreateDishDto } from './dto/create-dish.dto';
import { Dish } from './Dish';
import { DishesService } from './dishes.service';

@Controller('dishes')
export class DishesController {
  private dishService;

  constructor(dishService: DishesService) {
    this.dishService = dishService;
  }

  @Post()
  createOne(@Body() dish: CreateDishDto): {
    data: Dish;
  } {
    const data = this.dishService.create(dish);

    return {
      data,
    };
  }

  @Get()
  getAll(): {
    data: readonly Dish[];
  } {
    const data = this.dishService.read();

    return {
      data,
    };
  }

  @Put()
  updateOne(@Body() dish: UpdateDishDto): {
    data: Dish;
  } {
    const data: Dish = this.dishService.update(dish);

    return {
      data,
    };
  }

  @Delete(':id')
  removeOne(@Param('id', ParseIntPipe) id: number): void {
    this.dishService.delete(id);
  }
}
