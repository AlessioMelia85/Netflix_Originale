import { Time } from '@angular/common';
import { Actor } from './actor';
import { Genre } from './genre';

export interface Film {
    id?: number;
    coverUrl: string;
    title: string;
    description: string;
    director: string;
    duration: Time;
    releaseYear: number;
    stars: number;
    cast: Actor[];
    genres: Genre[];
    tags: string;
}