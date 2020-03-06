import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('cats')
export class CatsController {
    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return 'this action add a new cat'
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `this action returns a #${id} cat`
    }
}
