import { IsNotEmpty, IsEmail, IsString } from "class-validator";

export class CreateUserDTO {

    @IsNotEmpty()
    @IsString()
    url: string
}