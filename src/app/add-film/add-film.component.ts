import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';
import { FilmService } from '../services/film.service';
import { Actor } from '../models/actor';
import { ActorService } from '../services/actor.service';
import { Genre } from '../models/genre';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  
  actors: Actor[];
  genres: Genre[];
  
  
  constructor(public filmService: FilmService, private actorService: ActorService, private genreService: GenreService) { }
  

  ngOnInit(): void {
    
    this.actors = this.actorService.getActors();
    this.genres = this.genreService.getGenres();
    
   
    }
  };