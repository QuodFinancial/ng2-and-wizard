import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { playersRouting } from './players-routing.module';

import { PlayersComponent } from './players.component';
import { PlayersListComponent } from './players-list/players-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(playersRouting),
  ],
  declarations: [
    PlayersComponent,
    PlayersListComponent,
  ]
})
export class PlayersModule { }
