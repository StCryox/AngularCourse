import { Component } from '@angular/core';
import { PokemonBattleService } from './services/pokemon-battle-service/pokemon-battle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';

  constructor(public pokemonBattleService: PokemonBattleService) {
  }

  ngOnInit(): void {}
}
