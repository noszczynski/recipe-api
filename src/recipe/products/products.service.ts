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
  private dishService: DishesService;

  constructor(
    @Inject(forwardRef(() => DishesService)) dishService: DishesService,
  ) {
    this.dishService = dishService;
  }

  async create(product: CreateProductDto): Promise<Product> {
    const newProduct = new Product();
    Object.assign(newProduct, product);

    await this.dishService.readOne(product.dishId);

    return newProduct.save();
  }

  read(): Promise<Product[]> {
    return Product.find();
  }

  async readOne(id: number): Promise<Product> {
    const product = await Product.findOne({ where: { id } });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async update(product: UpdateProductDto): Promise<Product> {
    const productToUpdate = await this.readOne(product.id);

    Object.assign(productToUpdate, product);

    return productToUpdate;
  }

  async delete(id: number): Promise<Product> {
    const productToRemove = await this.readOne(id);
    return productToRemove.remove();
  }
}
