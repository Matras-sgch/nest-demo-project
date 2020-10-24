import { Photo } from "src/photos/interfaces/photo.interface";

export interface User {
    id?: number
    email: string
    password: string
    photos: Photo[]
}