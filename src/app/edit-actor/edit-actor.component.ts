import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/actor';
import { ActorService } from '../services/actor.service';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {
actors: Actor[];

  constructor(public actorService: ActorService) { }

  ngOnInit(): void {
    this.actors = this.actorService.getActors();
  }

}
