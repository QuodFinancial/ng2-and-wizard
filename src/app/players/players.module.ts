import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { playersRouting } from './players-routing.module';

import { PlayersComponent } from './players.component';
import { PlayersListComponent } from './players-list/players-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(playersRouting),
  ],
  declarations: [
    PlayersComponent,
    PlayersListComponent,
  ]
})
export class PlayersModule { }
