import { Injectable, NotFoundException } from '@nestjs/common';
import { IngredientRepository } from './ingredient.repository';
import { Ingredient } from './ingredient.entity';

@Injectable()
export class IngredientsService {
  constructor(private readonly ingredientRepository: IngredientRepository) {}

  async findOne(id: number): Promise<Ingredient> {
    const ingredient = await this.ingredientRepository.findById(id);

    if (!ingredient) {
      throw new NotFoundException(`Ingredient with id ${id} not found`);
    }

    return ingredient;
  }

  async find(): Promise<Ingredient[]> {
    return this.ingredientRepository.find();
  }
}
