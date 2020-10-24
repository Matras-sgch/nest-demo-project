import { Controller, Get, Req, Res, Query, Post, Put, Delete, Patch, Param, Redirect, Body, UsePipes, HttpException, HttpStatus, ForbiddenException, NotFoundException, UseFilters, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateProductDTO } from './dto/update-product.dto';
import { identity } from 'rxjs';
import { publicDecrypt } from 'crypto';



@Controller('products')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class ProductsController {
    constructor(private productService: ProductsService) {}

    @Post()
    async create(@Body() product: CreateProductDTO) : Promise<Product> {
        return await this.productService.create(product)
    }

    @Get()
    async findAll(): Promise<Product[]>  {
        return await this.productService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Product> {
        return await this.productService.findOne(id)
    }

    @Put(':id')
    async update(@Param('id') id, @Body()recordToUpdate: UpdateProductDTO): Promise<Product> {
        return await this.productService.update(id, recordToUpdate)
    }

    @Delete(':productId/:detailsId')
    async delete(@Param() params): Promise<DeleteResult> {
        return await this.productService.delete(params.productId, params.detailsId ) 
    }
}
