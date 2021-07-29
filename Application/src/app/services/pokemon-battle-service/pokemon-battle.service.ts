import {Injectable, NgModule} from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import {DecimalPipe} from '@angular/common';



@Injectable({
  providedIn: 'root'
})


export class PokemonBattleService {
  play: boolean = false;
  interval = 1_000;
  log: string[] = [];

  Tortank = {
    name: 'Tortank',
    base_experience: 35,
    hp: 45,
    attack: 55,
    defense: 40,
    picture: 'http://bit.ly/blastoisegif',
    level: 50,
    speed: 90,
    ability: [{
        name: 'Static',
        power: 28,
        chance: 80,
        hiddenAbility: false
    },
    {
        name: 'Lightning Rod',
        power: 80,
        chance: 30,
        hiddenAbility: true
    }]
  };

  Draco = {
    name: 'Draco',
    base_experience: 5,
    hp: 45,
    attack: 49,
    defense: 49,
    picture: 'http://bit.ly/charizardgif',
    level: 65,
    speed: 45,
    ability: [{
        name: 'Overgrow',
        power: 10,
        chance: 100,
        hiddenAbility: false
    },
    {
        name: 'Chlorophyll',
        power: 60,
        chance: 30,
        hiddenAbility: true
    }]
  };

  pokemon1 = this.Tortank;
  // new Pokemon(this.Tortank);
  pokemon2 = this.Draco;
  // new Pokemon(this.Draco);

  private getFirstPlayerTurnBySpeed(): Pokemon[] {
    return this.pokemon1.speed >= this.pokemon2.speed
    ? [this.pokemon1, this.pokemon2]
    : [this.pokemon2, this.pokemon1];
  }

  public isDead(pokemon: Pokemon): boolean {
    return pokemon.hp == 0 ? true : false;
  }

  private timer(ms: number): Promise<number> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async basicAttack(attacker: Pokemon, defender: Pokemon): Promise<number> {
    if (this.isDead(defender)){
        throw new Error('Opponent have 0 HP.');
    }
    defender.hp -= Math.round(attacker.attack * 0.12);
    if (defender.hp < 0) {
      defender.hp = 0;
    }
    return Math.round(attacker.attack * 0.12);
  }

  public async fight(play: boolean): Promise<void> {
    this.play = play;
    let counter = 0;
    const turn: Pokemon[] = this.getFirstPlayerTurnBySpeed();
    let attacker: Pokemon = turn[0];
    let defender: Pokemon = turn[1];
    let attkPower: number;

    while (!this.isDead(attacker) && !this.isDead(defender) && this.play !== false){
      console.log("Fight " + play);
      await this.timer(this.interval);
      attkPower = await this.basicAttack(attacker, defender);
      this.log.push(attacker.name + ' inflige ' + this.decimalPipe.transform(attkPower, '1.2') + ' de dégâts à ' + defender.name + ' : ' + defender.hp + ' HP.');
      counter++;
      defender = attacker;
      attacker = turn[counter % 2];
      if(this.isDead(attacker)){
        console.log(attacker.name + " is dead.");
      }
      else if( this.isDead(defender)){
        console.log(defender.name + " is dead.");
      }
    }
  }

  constructor(private decimalPipe: DecimalPipe) {
  }
}
