import { NestFactory } from '@nestjs/core';
import { from } from 'rxjs';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';


//The entry file of the application which uses the core function NestFactory to create a Nest application instance.
// เป็นไฟล์ config web server

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.use(cors());
  app.use(bodyParser.json({limit: '50MB'}));

  const options = new DocumentBuilder()
  .setTitle('Simple CRUD API')
  .setDescription('ทดสอบใช้งาน Swagger')
  .setVersion('1.0')
  .addTag('tags')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  
  await app.listen(3000); //Define Port
}

bootstrap();
