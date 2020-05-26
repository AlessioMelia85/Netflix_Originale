import { Injectable } from '@angular/core';
import { Film } from '../models/film';
import { ACTORS } from './actor.service';
import { GENRE } from './genre.service';
import { LocalStorageService } from 'ngx-webstorage';
import { ASSETS_PATH } from '../app.component';




/**********FILM**********/
const FILM: Film[] = [{
  id: 1,
  coverUrl: ASSETS_PATH + "/images/Spider_Man.jpg",
  title: 'Spider-man',
  description: 'Basato sui fumetti dell Uomo Ragno, creati da Stan Lee e Steve Ditko e pubblicati dalla Marvel Comics, il film racconta la storia di Peter Parker, interpretato da Tobey Maguire, che viene morso da un ragno geneticamente modificato e ne acquisisce i poteri ed i sensi da ragno',
  director: 'Sam Raimi',
  duration:  {
    hours: 3.5,
    minutes: 1,
  },
  releaseYear: 2002,
  stars: 4,
  cast: [ACTORS[0],ACTORS[1]],
  genres: [GENRE[2]],
  tags: 'Spiderman, Sam raimi'
},
{
id: 2,
coverUrl:  ASSETS_PATH + '/images/alien.jpg',
title: 'Alien',
description: 'Dei marines devono scoprire perché la colonia del pianeta Archeron abbia misteriosamente interrotto i contatti con la base. Una volta atterrati, si trovano ad affrontare una creatura mostruosa che si prepara a sferrare l attacco decisivo.',
director: 'Ridley Scott',
duration:  {
  hours: 1,
  minutes: 57,
},
releaseYear: 1979,
stars: 5,
cast:  [ACTORS[2]],
genres: [GENRE[1]],
tags: 'tenente Ripley'
},
{
id: 3,
coverUrl:  ASSETS_PATH + '/images/zodiac.jpg',
title: 'Zodiac',
description: 'Estate 1968. Nell area di San Francisco inizia a colpire un serial killer che rivendica i propri omicidi con lettere inviate ai principali quotidiani locali. Dopo aver assunto un nome riconoscibile, Zodiac, l assassino sfida la polizia.',
director: 'David Fincher',
duration:  {
  hours: 2,
  minutes: 42,
},
releaseYear: 2007,
stars: 2.5,
cast:  [ACTORS[4]],
genres: [GENRE[0],GENRE[3]],
tags: 'Vallejo, killer dello zodiaco',
},
{
id: 4,
coverUrl: 'assets/images/inception.jpg',
title: 'Inception',
description: 'Dom Cobb possiede una qualifica speciale: è in grado di inserirsi nei sogni altrui per prelevare i segreti nascosti nel più profondo del subconscio. Viene contattato da Saito, un potentissimo industriale giapponese.',
director: 'Christopher Nolan',
duration:  {
  hours: 2,
  minutes: 28,
},
releaseYear: 2010,
stars: 5,
cast:  [ACTORS[3]],
genres: [GENRE[4]],
tags: 'Sogni e realtà'
},
{
id: 5,
coverUrl: 'assets/images/joker.jpg',
title: 'Joker',
description: 'Arthur Fleck, attore comico fallito ed ignorato dalla società, vaga per le strade di Gotham City iniziando una lenta e progressiva discesa negli abissi della follia, sino a divenire una delle peggiori menti criminali della storia.',
director: 'David Fincher',
duration:  {
  hours: 2,
  minutes: 42,
},
releaseYear: 2019,
stars: 4.5,
cast:  [ACTORS[7],ACTORS[8]],
genres: [GENRE[8]],
tags: 'Pazzia, cipria',
},
{
id: 6,
coverUrl: 'assets/images/interstellar.jpg',
title: 'Interstellar',
description: 'Nel XXI secolo il pianeta Terra sta diventando inabitabile per l uomo: il cibo scarseggia perché solo poche colture resistono alla piaga, un flagello naturale che si nutre di azoto e che consuma l ossigeno dell’atmosfera, ed immani tempeste di sabbia rendono la vita quotidiana impossibile. Come conseguenza a ciò, si è affermata una società basata sulla post-verità, che nega molte conquiste scientifiche e le missioni..',
director: 'Christopher Nolan',
duration:  {
  hours: 2,
  minutes: 49,
},
releaseYear: 2014,
stars: 4,
cast:  [ACTORS[5],ACTORS[6]],
genres: [GENRE[5]],
tags: 'Viaggi spaziali, tempo'
}
];

@Injectable({
  providedIn: 'root'
})
export class FilmService {
films: Film[];
selectedFilm: Film;
newFilm: Film = {
  title: "",
  coverUrl: "",
  description: "",
  director: "",
  duration: {
    hours: 0,
    minutes: 0
  },
  releaseYear: 0,
  stars: 0,
  cast: [],
  genres: [],
  tags: ""
}

getFilms(): Film[] {
  this.films = this.localStorage.retrieve('films') || FILM;
  return this.films;
}


  addFilm(): void {
    if (!this.films) {
      this.getFilms();
    }
    
    this.films.push(this.newFilm);
    this.localStorage.store('films', this.films);
    
    // Reset newFilm
    this.newFilm = {
      title: '',
      coverUrl: '',
      description: '',
      director: '',
      duration: {
        hours: 0,
        minutes: 0
      },
      releaseYear: 0,
      stars: 0,
      cast: [],
      genres: [],
      tags: ''
    }
  }

  deleteFilm(): void {
  
  }

editFilm():void{
  this.localStorage.store('films', this.films);
  this.selectedFilm = null;

}
  getLastFilms(): Film[]{
    if (!this.films) {
      this.getFilms();
    }
  return this.films.slice(-4);
}

  getTopFilms(): Film[]{
    if (!this.films) {
      this.getFilms();
    }
    return this.films.sort((film1, film2) => {
      if (film1.stars > film2.stars) {
        return -1;
      }
      
    return 0;
    }
  ).slice(0, 3);
  }
  

  constructor(private localStorage: LocalStorageService) {

  }


}