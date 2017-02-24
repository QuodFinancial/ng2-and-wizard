import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PlayersService } from './players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayersService]
})
export class AppComponent { }
