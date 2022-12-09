import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ type: 'int' })
  dishId: number;
}
