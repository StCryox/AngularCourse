import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleLogComponent } from './components/battle-log/battle-log.component';
import { BattleComponent } from './components/battle/battle.component';
import { PlayButtonComponent } from './components/play-button/play-button.component';
import {DecimalPipe} from "@angular/common";
import { ChoosePokemonComponent } from './components/choose-pokemon/choose-pokemon.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayButtonComponent,
    BattleLogComponent,
    BattleComponent,
    ChoosePokemonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent, PlayButtonComponent, BattleLogComponent]
})
export class AppModule { }
