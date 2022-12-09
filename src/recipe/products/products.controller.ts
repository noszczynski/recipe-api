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
import { Product } from './Product';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  createOne(@Body() product: CreateProductDto): {
    data: Product;
  } {
    const data = this.productService.create(product);

    return {
      data,
    };
  }

  @Get()
  getAll(): {
    data: readonly Product[];
  } {
    const data = this.productService.read();

    return {
      data,
    };
  }

  @Put()
  updateOne(@Body() product: UpdateProductDto): {
    data: Product;
  } {
    const data: Product = this.productService.update(product);

    return {
      data,
    };
  }

  @Delete(':id')
  removeOne(@Param('id', ParseIntPipe) id: number): void {
    this.productService.delete(id);
  }
}
