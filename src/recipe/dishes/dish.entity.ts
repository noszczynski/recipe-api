import { Product } from '../products/product.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Dish extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'decimal' })
  servings: number;

  @OneToMany(() => Product, (product) => product.dish)
  products: Product[];

  @Column({ nullable: true, type: 'text' })
  description?: string;
}
