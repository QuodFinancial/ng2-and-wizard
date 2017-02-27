import { Component, OnInit } from '@angular/core';

import { Player } from './shared/player';
import { PlayersService } from './shared/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayersService],
})
export class PlayersComponent implements OnInit {

  playersCollection: Player[];

  constructor(playersService: PlayersService) {
    this.playersCollection = playersService.getCollection();
  }

  ngOnInit() { }

}
