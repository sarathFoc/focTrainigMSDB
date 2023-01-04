import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger('Main')

const microserviceOptions = {
  transport: Transport.REDIS,
  options: {
    host: '127.0.0.1',
    port: 6379
  }
}

async function bootstrap() {

  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen();
}
bootstrap();
