import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersListComponent } from './players-list/players-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlayersListComponent,
  ],
  exports: [
    PlayersListComponent,
  ]
})
export class PlayerModule { }
