import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {

    @Get()
    getTodos() {
        return [1, 2, 3]
    }
}


