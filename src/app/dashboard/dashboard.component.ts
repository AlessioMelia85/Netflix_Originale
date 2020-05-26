import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Film } from '../models/film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
films: Film[];
lastFilms: Film[];
topFilms: Film[];

username: string;
password: string;

successLogin: boolean;

  constructor(
    public userService: UserService,
    private filmService: FilmService) { }

  ngOnInit(): void {
    this.userService.getLoggedUser();
    this.lastFilms = this.filmService.getLastFilms();
    this.topFilms = this.filmService.getTopFilms();
    this.films = this.filmService.getFilms();
  }

  login() {
    this.successLogin = this.userService.login(this.username, this.password);
  }

 favourite(film){
    film.active = !film.active
  }

  setVote(film: Film, vote: number){
    film.stars = vote;
    this.filmService.editFilm();
  }
  

}
