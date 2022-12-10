import { DataSource, Repository } from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { Injectable } from '@nestjs/common';
@Injectable()
export class IngredientRepository extends Repository<Ingredient> {
  constructor(private dataSource: DataSource) {
    super(Ingredient, dataSource.createEntityManager());
  }
  async findById(id: number): Promise<Ingredient> {
    return this.createQueryBuilder('ingredient')
      .innerJoinAndSelect('ingredient.dish', 'dish')
      .innerJoinAndSelect('ingredient.product', 'product')
      .where('ingredient.id = :id', { id })
      .getOne();
  }
}
