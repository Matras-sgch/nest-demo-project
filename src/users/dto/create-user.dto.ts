import { IsNotEmpty, IsEmail, IsString, IsArray } from "class-validator";
import { PhotosEntity } from "src/photos/entities/photo.entity";

export class CreateUserDTO {

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string
    @IsNotEmpty()
    @IsString()
    password: string

    @IsArray()
    photos: PhotosEntity[] 
}