import { IsEmail, IsString, IsArray, IsOptional, IsInt } from "class-validator";
import { PhotosEntity } from "src/photos/entities/photo.entity";

export class UpdateUserDTO {
    @IsOptional()
    @IsString()
    @IsEmail()
    readonly email: string
    @IsOptional()
    @IsString()
    readonly password: string
}