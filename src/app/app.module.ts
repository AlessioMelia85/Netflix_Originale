import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { FilmsComponent } from './films/films.component';
import { ActorsComponent } from './actors/actors.component';
import { GenresComponent } from './genres/genres.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditActorComponent } from './edit-actor/edit-actor.component';
import { EditFilmComponent } from './edit-film/edit-film.component';
import { EditGenreComponent } from './edit-genre/edit-genre.component';
import { FormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarsComponent } from './stars/stars.component';
import { FilmListFilterPipe } from './pipes/film-list-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AddActorComponent,
    FilmsComponent,
    ActorsComponent,
    GenresComponent,
    AddFilmComponent,
    AddGenreComponent,
    DashboardComponent,
    EditActorComponent,
    EditFilmComponent,
    EditGenreComponent,
    StarsComponent,
    FilmListFilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
