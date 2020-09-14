import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { title } from 'process';

@Controller('todo')
export class TodoController {

    @Get() //การแสดงค่าหรือดึงค่ามาแสดง
    getTodos() {
        return [1, 2, 3]
    }

    @Post() //การสร้าง หรือ post การแสดงค่า

    psostTodos(@Body("title") title: string, @Body("subtitle") subtitle: string) {
        console.log(`title: ${title}, subtitle: ${subtitle}`)
    }

    @Delete("/:id") //การลบค่าตัวแปร
    deleteTodoById(@Param("id") id: string) {
        console.log(`id: ${id}`)
    }

}


