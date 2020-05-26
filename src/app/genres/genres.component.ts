import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';
import { Genre } from '../models/genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
genres: Genre[];

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genres = this.genreService.getGenres();
  }

  selectThisGenre(genre: Genre): void {
    event.stopPropagation();
    this.genreService.selectedGenre = genre;
  }
}
