import { Component, OnInit } from '@angular/core';
import { PokemonBattleService } from '../services/pokemon-battle.service';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.css']
})
export class PlayButtonComponent implements OnInit {

  play: boolean = false;
  battle_service: PokemonBattleService;

  constructor() { 
    this.battle_service = new PokemonBattleService();
  }

  ngOnInit(): void {
    
  }

  

  public playGame(): void {
    if(this.play === false){
     this.play = true;
     this.battle_service.fight();
    }
    else{
      this.play = false;
      this.battle_service.fight();
    }
  }
}
