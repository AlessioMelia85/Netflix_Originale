import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';
import { Genre } from '../models/genre';


@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  newGenre: Genre;
  genres: Genre[];

  constructor(public genreService: GenreService) { }

  
  
  
  ngOnInit(): void {
    this.genres = this.genreService.getGenres();

  }
  
}
