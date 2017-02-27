import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Angular and external modules
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MaterialModule,

    // Feature modules
    PlayersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
