import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Jan !!';
  }
}
//ตัว module ใหญ่ที่สุด ต้อง import ที่ตลอด
