import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosEntity } from './entities/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhotosEntity])],
  controllers: [PhotosController]
})
export class PhotosModule {}
