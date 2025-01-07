import { Controller,Post,Req,Get,Body,Param,Put,Delete, NotFoundException} from '@nestjs/common';
import {ProductsService} from './products.service';
import { Product } from './product.entity';



@Controller('products')
export class ProductsController{
    constructor(private readonly productsService: ProductsService){}

    @Post()
    create(@Body() product: Product){
        return this.productsService.create(product);
    }
    
    @Get()
    findAll(){
        return this.productsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id:number) :Promise<Product>{
        const product =await this.productsService.findById(id)
        if(!product){
            throw new NotFoundException(`product withid ${id} not found`)
        }
        return product
    }

    @Put(':id')
    update (@Param('id') id:number, @Body() product:Partial<Product>){
        return this.productsService.update(id,product)
    }

    @Delete(':id')
    async delete(@Param('id') id:number){
        const product =await this.productsService.findById(id)
        if(!product){
            throw new NotFoundException(`product withid ${id} not found`)
        }
         await this.productsService.delete(id)
         return{messagre: `Product with Id ${id} has been successfully deleted`}
    }
}
