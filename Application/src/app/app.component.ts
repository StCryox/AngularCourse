import { Component } from '@angular/core';
import { PokemonBattleService } from './services/pokemon-battle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';

  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();


  constructor(public pokemonBattleService: PokemonBattleService) {
  }

  ngOnInit(): void {
    this.pokemonBattleService.fight();
  }
}
