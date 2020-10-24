import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { UserEntity } from "src/users/entities/users.entity";


@Entity({ name: 'photos' })
export class PhotosEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    url: string

    @ManyToOne(type => UserEntity, userEntity => userEntity.photos, {
        onDelete: "CASCADE"
    })
    user: UserEntity
}