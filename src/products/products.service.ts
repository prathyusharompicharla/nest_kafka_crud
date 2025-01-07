import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Kafka } from 'kafkajs';
import { KafkaService } from './kafka.service';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
        private kafkaService : KafkaService,
    ) { }

    private kafka = new Kafka({
        clientId: 'nestjs-kafka-client',
        brokers: ['localhost:9092'],
    });
    private producer = this.kafka.producer();

    async create(product: Partial<Product>) {
        const savedProduct = await this.productRepository.save(product);
        await this.kafkaService.sendMessage('product_created',JSON.stringify(savedProduct))
        // await this.producer.connect();
        // await this.producer.send({
        //     topic: 'product_created',
        //     messages: [{ value: JSON.stringify(savedProduct) }]
        // })
        // await this.producer.disconnect()
        return savedProduct;
    }

    async findAll(): Promise<Product[]>{
        return await this.productRepository.find()
    }

    async findById(id: number): Promise<Product>{
        return await this.productRepository.findOne({where:{id}})
    }

    async update(id: number, product:Partial<Product>): Promise<Product>{
          await this.productRepository.update(id,product);
          return this.productRepository.findOneBy({id})
    }

    async delete(id: number):Promise<void>{
        await this.productRepository.delete(id);
    }

}

