import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { initializeSeeds } from '../initailizeSeeds';
import { Ingredient } from '../../../recipe/ingredients/ingredient.entity';
import { Product } from '../../../recipe/products/product.entity';
import { Dish } from '../../../recipe/dishes/dish.entity';

initializeSeeds();

export default class ingredientSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const dishes = await connection.getRepository(Dish).find();
    const products = await connection.getRepository(Product).find();

    await factory(Ingredient)()
      .map(async (ingredient: Ingredient) => {
        ingredient.dish = dishes[Math.floor(Math.random() * dishes.length)];
        ingredient.product =
          products[Math.floor(Math.random() * products.length)];

        return ingredient;
      })
      .createMany(60);
  }
}
