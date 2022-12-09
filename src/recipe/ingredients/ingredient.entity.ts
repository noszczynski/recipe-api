import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../products/product.entity';
import { Dish } from '../dishes/dish.entity';

@Entity()
export class Ingredient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal' })
  amount: number;

  @ManyToOne(() => Product, (product) => product.ingredients, {
    onDelete: 'CASCADE',
  })
  product: Product;

  @ManyToOne(() => Dish, (dish) => dish.ingredients, {
    onDelete: 'CASCADE',
  })
  dish: Dish;
}
