import { Component, OnInit } from '@angular/core';
import { PokemonBattleService } from '../services/pokemon-battle.service';
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.css']
})
export class PlayButtonComponent implements OnInit {

  play: boolean = false;
  pokemonBattleService: PokemonBattleService;

  constructor(private decimalPipe: DecimalPipe) {
    this.pokemonBattleService = new PokemonBattleService(decimalPipe);
  }

  ngOnInit(): void {
  }

  public playGame(): void {
    if(this.play === false){
      this.play = true;
      this.pokemonBattleService.fight(this.play);
    }
    else if(this.play === true){
      this.play = false;
      this.pokemonBattleService.fight(this.play);
    }
  }
}
