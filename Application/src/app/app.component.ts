import { Component } from '@angular/core';
import { PokemonBattleService } from './services/pokemon-battle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';

  play: boolean = false;
  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();


  constructor(public pokemonBattleService: PokemonBattleService) {
  }


  public playGame(): void {
    if(this.play === false){
     this.play = true;
     this.pokemonBattleService.fight();
    }
    else{
      this.play = false;
      this.pokemonBattleService.fight();
    }
  }

  ngOnInit(): void {
  }
}
