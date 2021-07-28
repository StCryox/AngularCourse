import { DecimalPipe } from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import { PokemonBattleService } from '../../services/pokemon-battle-service/pokemon-battle.service';

@Component({
  selector: 'app-battle-log',
  templateUrl: './battle-log.component.html',
  styleUrls: ['./battle-log.component.css']
})
export class BattleLogComponent implements OnInit {


  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();

  constructor(public pokemonBattleService: PokemonBattleService) {
  }

  ngOnInit(): void {
  }


}
