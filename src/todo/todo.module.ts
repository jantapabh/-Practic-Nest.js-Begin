import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';

@Module({
  controllers: [TodoController]
})
export class TodoModule {}

//module เปนียบเหมือนผู้ใหญ่บ้าน