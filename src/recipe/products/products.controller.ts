import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { UpdateResult } from 'typeorm';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  async createOne(@Body() product: CreateProductDto): Promise<{
    data: Product;
  }> {
    const data = await this.productService.create(product);

    return {
      data,
    };
  }

  @Get()
  async getAll(): Promise<{
    data: Product[];
  }> {
    const data = await this.productService.read();

    return {
      data,
    };
  }

  @Put()
  async updateOne(@Body() product: UpdateProductDto): Promise<{
    data: UpdateResult;
  }> {
    const data = await this.productService.update(product);

    return {
      data,
    };
  }

  @Delete(':id')
  async removeOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.productService.delete(id);
  }
}
