import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Player } from '../../../player';

@Component({
  selector: 'players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  @Input()
  players: Player[];

  constructor() { }

  ngOnInit() { }

}
