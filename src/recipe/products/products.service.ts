import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async create(product: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(product);

    return this.productRepository.save(newProduct);
  }

  read(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async readOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async update(product: UpdateProductDto): Promise<UpdateResult> {
    await this.readOne(product.id);
    return this.productRepository.update(product.id, product);
  }

  async delete(id: number): Promise<Product> {
    const product = await this.readOne(id);
    return this.productRepository.remove(product);
  }
}
