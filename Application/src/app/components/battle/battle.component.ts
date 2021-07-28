import { Component, OnInit } from '@angular/core';
import {PokemonBattleService} from '../../services/pokemon-battle-service/pokemon-battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  constructor(public pokemonBattleService: PokemonBattleService) { }

  ngOnInit(): void {
  }

}
