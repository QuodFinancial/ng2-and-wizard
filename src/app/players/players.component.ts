import { Component, OnInit } from '@angular/core';

import { Player } from '../../player';
import { PlayersService } from '../../players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  playersCollection: Player[];

  constructor(playersService: PlayersService) {
    this.playersCollection = playersService.getCollection();
  }

  ngOnInit() { }

}
