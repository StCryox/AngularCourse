import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonBattleService } from '../services/pokemon-battle.service';

@Component({
  selector: 'app-battle-log',
  templateUrl: './battle-log.component.html',
  styleUrls: ['./battle-log.component.css']
})
export class BattleLogComponent implements OnInit {

  pokemonBattleService: PokemonBattleService;
  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();

  constructor(private decimalPipe: DecimalPipe) {
    this.pokemonBattleService = new PokemonBattleService(decimalPipe);
  }

  ngOnInit(): void {
  }


}
