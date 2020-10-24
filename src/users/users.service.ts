import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/users.entity';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { PhotosEntity } from '../photos/entities/photo.entity';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>,
        // @InjectRepository(PhotosEntity)
        // private readonly photosRepository: Repository<PhotosEntity>
    ) {}

        async create(user: CreateUserDTO): Promise<User> {
            // if i save the record in users it will automatically save the record in photos
            return await this.usersRepository.save(user)
        }

        async findAll(): Promise<User[]> {
            return await this.usersRepository.find({ relations: ['photos'] })
        }

        async findOne(id: number): Promise<User> {
            return await this.usersRepository.findOne(id, { relations: ['photos'] })
        }

        async delete(id: number): Promise<DeleteResult> {
            return await this.usersRepository.delete(id)
        }

        async update(id: number, user: UpdateUserDTO): Promise<UpdateResult> {
            return await this.usersRepository.update(id, user)
        }
}
