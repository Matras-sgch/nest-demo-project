import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Put, Patch } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    async create(@Body() user: CreateUserDTO): Promise<User> {
        return await this.usersService.create(user)
    }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id', new ParseIntPipe) id): Promise<User> {
        return await this.usersService.findOne(id)
    }

    @Delete(':id')
    async delete(@Param('id', new ParseIntPipe) id): Promise<DeleteResult> {
        return await this.usersService.delete(id)
    }

    @Patch(':id')
    async update(@Param('id', new ParseIntPipe) id, @Body() user: UpdateUserDTO): Promise<UpdateResult> {
        return await this.usersService.update(id, user)
    }
}
