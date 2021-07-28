import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleLogComponent } from './components/battle-log/battle-log.component';
import { BattleComponent } from './components/battle/battle.component';
import { PlayButtonComponent } from './components/play-button/play-button.component';
import {DecimalPipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    PlayButtonComponent,
    BattleLogComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent, PlayButtonComponent, BattleLogComponent]
})
export class AppModule { }
