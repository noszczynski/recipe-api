import { Factory, Seeder } from 'typeorm-seeding';
import { initializeSeeds } from '../initailizeSeeds';
import { User } from '../../../user/user.entity';

initializeSeeds();

export default class userSeeder implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(User)().createMany(15);
  }
}
