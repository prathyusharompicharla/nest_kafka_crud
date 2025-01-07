import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Injectable()
export class KafkaService implements OnModuleInit {
  private kafka = new Kafka({
    clientId: 'nestjs-kafka-client',
    brokers: ['localhost:9092'],
  });

  private producer = this.kafka.producer();
  private consumer = this.kafka.consumer({ groupId: 'nestjs-group' });

  async onModuleInit() {
    await this.producer.connect();
    await this.consumer.connect();

    this.consumer.subscribe({ topic: 'product_created' });
    // this.consumer.run({
    //   eachMessage: async ({ topic, partition, message }) => {
    //     console.log(`Received message: ${message.value.toString()}`);
    //   },
    // });
  }

  async sendMessage(topic: string, message: string) {
    await this.producer.send({
      topic,
      messages: [{ value: message }],
    });
  }
}