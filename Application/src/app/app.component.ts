import { Component, OnInit } from '@angular/core';
import { PokemonBattleService } from './pokemon-battle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'Pokemon';
 
  constructor(public pokemonBattleService: PokemonBattleService) {
  }

  ngOnInit(): void {
    this.pokemonBattleService.fight();
  }
}
