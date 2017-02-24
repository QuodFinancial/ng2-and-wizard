import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { PlayersListComponent } from './players-list/players-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    PlayersListComponent,
  ],
  exports: [
    PlayersListComponent,
  ]
})
export class PlayerModule { }
