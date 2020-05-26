import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';
import { FilmService } from '../services/film.service';
import { Actor } from '../models/actor';
import { Genre } from '../models/genre';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
films: Film[];
timeOut;


  constructor(public userService: UserService, private filmService: FilmService) { }

  ngOnInit(): void {
    this.userService.getLoggedUser();
    this.films = this.filmService.getFilms();
    
  }

  getCastList(cast: Actor[]): string{
    return cast.map(x => x.firstname + ' ' + x.lastname).join(', ');
  }

  getGenreList(genres: Genre[]): string{
    return genres.map(x => x.name).join(', ');
  }

  selectThisFilm(film: Film):void{
    event.stopPropagation();
    this.filmService.selectedFilm = film;
  }

  search(event) {
    let test = event.target.value;

    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    
    setTimeout(() => {

    if (test.length >= 3) {
      this.films = this.filmService.getFilms().filter(x => x.title.toLowerCase().indexOf(test.toLowerCase()) > -1);      
      // this.films = this.filmService.getFilms().filter(y => y.description.toLowerCase().indexOf(test.toLowerCase()) > -1);
      // this.films = this.filmService.getFilms().filter(z => z.director.toLowerCase().indexOf(test.toLowerCase()) > -1);
    }
    else{
      this.films = this.filmService.getFilms();
    }
  }, 300);
  
  }
  search2(event) {
    let test = event.target.value;
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    
    setTimeout(() => {


    if (test.length >= 3) {
      this.films = this.filmService.getFilms().filter(y => y.description.toLowerCase().indexOf(test.toLowerCase()) > -1);
    }
    else{
      this.films = this.filmService.getFilms();
    }
  },300);    
  }

  search3(event) {
    let test = event.target.value;

    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    
    setTimeout(() => {

    if (test.length >= 3) {
       this.films = this.filmService.getFilms().filter(z => z.director.toLowerCase().indexOf(test.toLowerCase()) > -1);
    }
    else{
      this.films = this.filmService.getFilms();
    }
    
  },300);

  }

  favourite(film){
    event.stopPropagation();
    film.active = !film.active
    this.filmService.editFilm();
 }


 setVote(film: Film, vote: number){
  film.stars = vote;
  this.filmService.editFilm();
}

}
