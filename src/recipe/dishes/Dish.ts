import { Product } from '../products/Product';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dish extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'decimal' })
  servings: number;

  // @OneToMany()
  products: Product[];

  @Column({ nullable: true, type: 'text' })
  description?: string;
}
