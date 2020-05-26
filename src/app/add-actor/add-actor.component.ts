import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/actor';
import { ActorService } from '../services/actor.service';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {
  newActor: Actor;
  actors: Actor[];
  
  constructor(public actorService: ActorService) { }
  

  ngOnInit(): void {
    this.actors = this.actorService.getActors();
    
  };
 

}
