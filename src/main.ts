import { NestFactory } from '@nestjs/core';
import { from } from 'rxjs';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';


//The entry file of the application which uses the core function NestFactory to create a Nest application instance.

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); //Define Port
}
bootstrap();
