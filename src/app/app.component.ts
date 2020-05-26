import { Component } from '@angular/core';
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Netflix';



}

export const ASSETS_PATH = 'assets/';
// export const ASSETS_PATH = 'https://raw.githubusercontent.com/AlessioMelia85/Netflux/tree/master/src/assets/';




// export const CONFIG = {
//   assethsPath: 'assets/images'
//   // assetsPath: 'https://github.com/AlessioMelia85/Netflux/tree/master/src/assets/images'
// }


