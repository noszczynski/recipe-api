import { Injectable, NotFoundException } from '@nestjs/common';
import { Dish } from './dish.entity';
import { UpdateDishDto } from './dto/update-dish.dto';
import { CreateDishDto } from './dto/create-dish.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish) private dishRepository: Repository<Dish>,
  ) {}

  create(dish: CreateDishDto): Promise<Dish> {
    return this.dishRepository.save(dish);
  }

  read(): Promise<Dish[]> {
    return this.dishRepository.find({ relations: ['products'] });
  }

  async readOne(id: number): Promise<Dish> {
    const dish = await this.dishRepository.findOne({
      where: { id },
      relations: ['products'],
    });

    if (!dish) {
      throw new NotFoundException('DishEntity not found');
    }

    return dish;
  }

  async update(dish: UpdateDishDto): Promise<UpdateResult> {
    await this.readOne(dish.id);
    return this.dishRepository.update(dish.id, dish);
  }

  async delete(id: number): Promise<Dish> {
    const dish = await this.readOne(id);
    return this.dishRepository.remove(dish);
  }
}
