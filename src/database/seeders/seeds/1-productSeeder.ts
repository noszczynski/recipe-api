import { Factory, Seeder } from 'typeorm-seeding';
import { Product } from '../../../recipe/products/product.entity';
import { initializeSeeds } from '../initailizeSeeds';

initializeSeeds();

export default class productSeeder implements Seeder {
  public async run(factory: Factory): Promise<void> {
    console.log('factory:');
    console.log(factory);
    await factory(Product)().createMany(30);
  }
}
