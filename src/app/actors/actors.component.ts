import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/actor';
import { ActorService } from '../services/actor.service';


@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  actors: Actor[];

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.actors = this.actorService.getActors();
  }

  selectThisActor(actor: Actor): void {
    event.stopPropagation();
    this.actorService.selectedActor = actor;
  }
}
