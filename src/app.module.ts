import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password: 'Abc@123',
      database:'postgres',
      entities:[Product],
      synchronize: true,
      name:'default',
    }),
    ProductsModule,
  ],
})
export class AppModule {}
