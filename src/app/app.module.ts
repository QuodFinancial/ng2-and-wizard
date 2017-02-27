import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRouting } from './app-routing.module';
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

    // Routes
    RouterModule.forRoot(appRouting),

    // Feature modules
    PlayersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
