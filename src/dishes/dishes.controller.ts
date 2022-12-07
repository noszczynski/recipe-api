import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { nanoid } from 'nanoid';
import { UpdateDishDto } from './dto/update-dish.dto';
import { CreateDishDto } from './dto/create-dish.dto';

interface Dish {
  id: number;
  name: string;
  servings: number;
  description?: string;
}

@Controller('dishes')
export class DishesController {
  id = 1;
  dishes: Dish[] = [
    {
      id: this.id++,
      name: 'Lasagne',
      servings: 1,
    },
  ];

  @Post()
  createOne(@Body() dish: CreateDishDto): {
    data: CreateDishDto;
  } {
    this.dishes.push({ id: this.id++, ...dish } as Dish);

    return { data: dish };
  }

  @Get()
  getAll(): Dish[] {
    return this.dishes;
  }

  @Put()
  updateOne(@Body() dish: UpdateDishDto): {
    data: Dish;
  } {
    const dishToUpdate = this.dishes.find(
      (d: Dish) => d.id === Number(dish.id),
    );

    if (!dishToUpdate) {
      throw new NotFoundException(`Dish id: ${dish.id} not found`);
    }

    Object.assign(dishToUpdate, dish);

    return {
      data: dishToUpdate,
    };
  }

  @Delete(':id')
  removeOne(@Param('id') id: string): void {
    const dishToRemove = this.dishes.find((d: Dish) => d.id === Number(id));

    if (!dishToRemove) {
      throw new NotFoundException(`Dish id: ${id} not found`);
    }

    this.dishes = this.dishes.filter((d: Dish) => d.id !== Number(id));
  }
}
