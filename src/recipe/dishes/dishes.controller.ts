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
import { Dish } from './dish.entity';
import { DishesService } from './dishes.service';

@Controller('dishes')
export class DishesController {
  private dishService;

  constructor(dishService: DishesService) {
    this.dishService = dishService;
  }

  @Post()
  async createOne(@Body() dish: CreateDishDto): Promise<{
    data: Dish;
  }> {
    const data = await this.dishService.create(dish);

    return {
      data,
    };
  }

  @Get()
  async getAll(): Promise<{
    data: Dish[];
  }> {
    const data = await this.dishService.read();

    return {
      data,
    };
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<{
    data: Dish;
  }> {
    const data = await this.dishService.readOne(id);

    return {
      data,
    };
  }

  @Put()
  async updateOne(@Body() dish: UpdateDishDto): Promise<{
    data: Dish;
  }> {
    const data = await this.dishService.update(dish);

    return {
      data,
    };
  }

  @Delete(':id')
  removeOne(@Param('id', ParseIntPipe) id: number): void {
    this.dishService.delete(id);
  }
}
