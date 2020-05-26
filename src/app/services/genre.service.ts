import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';


/**********GENERE**********/
export const GENRE: Genre[] = [{
  id:1,
  name:'Thriller'
  },
  {
  id:2,
  name:'Horror'
  },
  {
  id:3,
  name: 'Supereroi'
  },
  {
  id:4,
  name: 'Poliziesco'
  },
  {
  id:5,
  name: 'Azione'
  },
  {
  id:6,
  name: 'Avventura'
  },
  {
  id:7,
  name: 'Giallo'
  },
  {
  id:8,
  name: 'Animazione'
  },
  {
  id:9,
  name: 'Drammatico'
  }
  ];

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  genres: Genre[];
  selectedGenre: Genre;
  newGenre: Genre = {
    name: ''
  };

  getGenres(): Genre[] {
    this.genres = this.localStorage.retrieve('genres') || GENRE;
    return this.genres;
  }

  addGenre(): void {
    this.genres.push(this.newGenre);
    this.localStorage.store('genres', this.genres);

    // Reset newGenre
    this.newGenre = {
      name: ''
    };
  }

  editGenre(): void {
    this.localStorage.store('genres', this.genres);
    this.selectedGenre = null;
  }

  constructor(private localStorage: LocalStorageService) { }
}