import { Film } from './film';

export interface User {
    id?: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    favoritesfilm: Film[]
}