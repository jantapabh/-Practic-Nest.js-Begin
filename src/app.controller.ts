import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Basic controller sample with a single route.

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Method การทำงานต่าง ๆ ใช้ http request ในการจัดการเช่น get post put delte
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
