import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleLogComponent } from './components/battle-log/battle-log.component';
import { BattleComponent } from './components/battle/battle.component';
import { PlayButtonComponent } from './components/play-button/play-button.component';
import {DecimalPipe} from "@angular/common";
import { ChoosePokemonComponent } from './components/choose-pokemon/choose-pokemon.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PlayButtonComponent,
    BattleLogComponent,
    BattleComponent,
    ChoosePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
