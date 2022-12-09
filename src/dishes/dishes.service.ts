import { Injectable, NotFoundException } from '@nestjs/common';
import { Dish } from './Dish';
import { UpdateDishDto } from './dto/update-dish.dto';
import { CreateDishDto } from './dto/create-dish.dto';

@Injectable()
export class DishesService {
  private id = 1;
  private dishes: Dish[] = [
    {
      id: this.id++,
      name: 'Lasagne',
      servings: 1,
    },
  ];

  getOneById(id: number): Dish {
    const dish: Dish | undefined = this.dishes.find((d: Dish) => d.id === id);

    if (!dish) {
      throw new NotFoundException('Dish not found');
    }

    return dish;
  }

  create(dish: CreateDishDto): Dish {
    const newDish: Dish = { id: this.id++, ...dish };
    this.dishes.push(newDish);

    return newDish;
  }

  read(): readonly Dish[] {
    return this.dishes;
  }

  update(dish: UpdateDishDto): Dish {
    const dishToUpdate = this.getOneById(dish.id);

    Object.assign(dishToUpdate, dish);

    return dishToUpdate;
  }

  delete(id: number): void {
    this.getOneById(id);
    this.dishes = this.dishes.filter((d: Dish) => d.id !== Number(id));
  }
}
