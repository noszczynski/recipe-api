import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Dish } from '../dishes/dish.entity';

export type ProductUnit =
  | 'kg'
  | 'g'
  | 'tsp'
  | 'sp'
  | 'pinch'
  | 'ml'
  | 'l'
  | 'item';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  unit: ProductUnit;

  @Column({ type: 'decimal' })
  amount: number;

  @ManyToOne(() => Dish, (dish) => dish.products, {
    onDelete: 'CASCADE',
  })
  dish: Dish;
}
