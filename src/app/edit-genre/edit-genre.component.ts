import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';
import { Genre } from '../models/genre';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {
  genres: Genre[];
  
  constructor(public genreService: GenreService) { }

  ngOnInit(): void {
    this.genres = this.genreService.getGenres();
  }

 
}
