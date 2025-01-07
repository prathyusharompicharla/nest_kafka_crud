import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import {Product} from "./product.entity";
import { KafkaModule } from './kafka.module';

@Module({
  imports:[TypeOrmModule.forFeature([Product]),KafkaModule],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
