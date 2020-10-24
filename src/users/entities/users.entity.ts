import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { PhotosEntity } from "src/photos/entities/photo.entity";

@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    email: string
    @Column()
    password: string


    @OneToMany(type => PhotosEntity, photosEntity => photosEntity.user, {
        cascade: ['insert', 'update'],
        onDelete: 'CASCADE'
    })
    photos: PhotosEntity[]
}