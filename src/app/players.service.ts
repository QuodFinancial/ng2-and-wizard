import { Injectable } from '@angular/core';

import { Player } from './player';

@Injectable()
export class PlayersService {

  PlayersCollection: Player[] = [
    new Player('Charles'),
    new Player('Mohamed'),
    new Player('Rabah'),
    new Player('Thomas'),
  ];

  constructor() { }

  getCollection(): Player[] {
    return this.PlayersCollection;
  }

}
