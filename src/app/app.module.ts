import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { PlayerModule } from './widgets/player/player.module';

import { AppComponent } from './app.component';
import { PlayersComponent } from './views/players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
  ],
  imports: [
    // Angular and external modules
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: 'players', component: PlayersComponent },
    ]),

    // Widgets modules
    PlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
