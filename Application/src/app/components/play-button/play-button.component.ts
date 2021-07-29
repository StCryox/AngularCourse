import { Component, OnInit } from '@angular/core';
import { PokemonBattleService } from '../../services/pokemon-battle-service/pokemon-battle.service';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.css']
})
export class PlayButtonComponent implements OnInit {

  play: boolean = false;

  constructor(public pokemonBattleService: PokemonBattleService) {
  }

  ngOnInit(): void {
    //this.pokemonBattleService.subscribe(url => console.log('The URL changed to: ' + url));
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
