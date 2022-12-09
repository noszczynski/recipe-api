import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './Product';
import { UpdateProductDto } from './dto/update-product.dto';
import { DishesService } from '../dishes/dishes.service';

@Injectable()
export class ProductsService {
  private id = 1;
  private products: Product[] = [
    {
      id: this.id++,
      name: 'Milk',
      unit: 'l',
      amount: 1,
      dishId: 1,
    },
  ];
  private dishService: DishesService;

  constructor(
    @Inject(forwardRef(() => DishesService)) dishService: DishesService,
  ) {
    this.dishService = dishService;
  }

  getOneById(id: number): Product {
    const product: Product | undefined = this.products.find(
      (d: Product) => d.id === id,
    );

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  getAllForDishId(id: number): Product[] {
    return this.products.filter((p: Product) => p.dishId === id);
  }

  create(product: CreateProductDto): Product {
    const newProduct: Product = {
      id: this.id++,
      ...product,
    };

    this.dishService.getOneById(product.dishId);
    this.products.push(newProduct);

    return newProduct;
  }

  read(): readonly Product[] {
    return this.products;
  }

  update(product: UpdateProductDto): Product {
    const productToUpdate = this.getOneById(product.id);

    Object.assign(productToUpdate, product);

    return productToUpdate;
  }

  delete(id: number): void {
    this.getOneById(id);
    this.products = this.products.filter((d: Product) => d.id !== Number(id));
  }
}
