import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Dish } from '../dishes/dish.entity';
import { Ingredient } from '../ingredients/ingredient.entity';

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

  @OneToMany(() => Ingredient, (ingredient) => ingredient.product)
  ingredients: Ingredient[];
}
