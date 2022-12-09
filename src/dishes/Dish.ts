import { Product } from '../products/Product';

export interface Dish {
  id: number;
  name: string;
  servings: number;
  products: Product[];
  description?: string;
}
