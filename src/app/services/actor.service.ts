import { Injectable } from '@angular/core';
import { Actor } from '../models/actor';
import { LocalStorageService } from 'ngx-webstorage';
import { ASSETS_PATH } from '../app.component';


/**********ATTORI**********/
export const ACTORS: Actor[]=[{
  id: 1,
  photo:ASSETS_PATH + '/images/tobey.jpg',
  firstname: 'Tobey',
  lastname: 'Maguire'
  },
  {
  id: 2,
  photo:ASSETS_PATH + 'images/Kirsten.jpg',
  firstname: 'Kirsten',
  lastname: 'Durst'
  },
  {
  id: 3,
  photo:ASSETS_PATH + 'images/Sigourney.jpg',
  firstname: 'Sigurney',
  lastname: 'Weaver'
  },
  {
    id: 4,
    photo:ASSETS_PATH + 'images/Leonardo.jpg',
    firstname: 'Leonardo',
    lastname: 'Di caprio'
    },
    {
      id: 5,
      photo:ASSETS_PATH + 'images/Mark.jpg',
      firstname: 'Mark',
      lastname: 'Ruffalo'
      },
      {
        id: 6,
        photo:ASSETS_PATH + 'images/Matthew.jpg',
        firstname: 'Mattew',
        lastname: 'McConaughey'
        },
        {
          id: 7,
          photo:ASSETS_PATH + 'images/Anne.jpg',
          firstname: 'Anne',
          lastname: ' Hathaway'
          }
          ,
        {
          id: 8,
          photo:ASSETS_PATH + 'images/Joaquin.jpg',
          firstname: 'Joaquin',
          lastname: ' Phoenix'
          }
          ,
        {
          id: 9,
          photo:ASSETS_PATH + '/images/Robert.jpg',
          firstname: 'Robert',
          lastname: 'De Niro'
          }
    ];
  

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  actors: Actor[];
  selectedActor: Actor;
  newActor: Actor = {
    photo: '',
    firstname: '',
    lastname: ''
  };

  getActors(): Actor[] {
    this.actors = this.localStorage.retrieve('actors') || ACTORS;
    return this.actors;
  }

  addActor(): void {
    this.actors.push(this.newActor);
    this.localStorage.store('actors', this.actors);

    // Reset newActor
    this.newActor = {
      photo:'',
      firstname: '',
      lastname: ''
    };
  }

  editActor(): void {
    this.localStorage.store('actors', this.actors);
    this.selectedActor = null;
  }

  constructor(private localStorage: LocalStorageService) { }
}
