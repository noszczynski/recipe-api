import { Injectable, NotFoundException } from '@nestjs/common';
import { Dish } from './Dish';
import { UpdateDishDto } from './dto/update-dish.dto';
import { CreateDishDto } from './dto/create-dish.dto';

@Injectable()
export class DishesService {
  create(dish: CreateDishDto): Promise<Dish> {
    const newDish = new Dish();
    Object.assign(newDish, dish);

    return newDish.save();
  }

  read(): Promise<Dish[]> {
    return Dish.find();
  }

  async readOne(id: number): Promise<Dish> {
    const dish = await Dish.findOne({ where: { id } });

    if (!dish) {
      throw new NotFoundException('Dish not found');
    }

    return dish;
  }

  async update(dish: UpdateDishDto): Promise<Dish> {
    const dishToUpdate = await this.readOne(dish.id);

    Object.assign(dishToUpdate, dish);

    return dishToUpdate;
  }

  async delete(id: number): Promise<Dish> {
    const dishToRemove = await this.readOne(id);
    return dishToRemove.remove();
  }
}
