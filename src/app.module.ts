import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';




//The root module of the application.
// เป็นไฟล์ของโมดูลแรกที่ถูกเรียกใช้งานจากนั้นจะ รmport โมดูลต่าง ๆ มาใช้

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

//ส่วนติดตั้ง Package, module
//ตัว module ใหญ่ที่สุด ต้อง import ที่นี้ตลอด
