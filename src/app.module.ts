import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module'; // import module todo
import { CatsController } from './cats/cats.controller';


//The root module of the application.


@Module({
  imports: [TodoModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}

//ส่วนติดตั้ง Package, module
//ตัว module ใหญ่ที่สุด ต้อง import ที่นี้ตลอด
