import { Injectable } from '@angular/core';
import { IPokemon, IPokemonProps, Pokemon } from 'src/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonBattleService {
  play = false;
  interval: number = 5_000;
  loserColor = "red";
  winnerColor = "green";
  log: string[] = [];

  Pikachu = {
    name: "Pikachu",
    max_hp: 35,
    hp: 35,
    attack: 55,
    defense: 40,
    special_attak: 50,
    special_defense: 50,
    speed: 90,
    ability: [{
        name: "Static",
        power: 28,
        chance: 80,
        hiddenAbility: false
    },
    {
        name: "Lightning Rod",
        power: 80,
        chance: 30,
        hiddenAbility: true
    }]
  }

  Bulbasaur = {
    name: "Bulbasaur",
    max_hp: 45,
    hp: 45,
    attack: 49,
    defense: 49,
    special_attak: 65,
    special_defense: 65,
    speed: 45,
    ability: [{
        name: "Overgrow",
        power: 10,
        chance: 100,
        hiddenAbility: false
    },
    {
        name: "Chlorophyll",
        power: 60,
        chance: 30,
        hiddenAbility: true
    }]
  }

  pokemon1 = new Pokemon(this.Pikachu);
  pokemon2 = new Pokemon(this.Bulbasaur);

  private getFirstPlayerTurnBySpeed(): IPokemon[] {
    return this.pokemon1.speed >= this.pokemon2.speed 
    ? [this.pokemon1, this.pokemon2] 
    : [this.pokemon2, this.pokemon1];
  }

  public isDead(pokemon: IPokemonProps): boolean {
    return pokemon.hp == 0 ? true : false;
  }

  private async timer(ms: number): Promise<number> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async basicAttack(attacker: IPokemonProps, defender: IPokemonProps): Promise<number> {
    if(this.isDead(defender)){
        throw new Error("Opponent have 0 HP.");
    }
    defender.hp -= Math.round(attacker.attack * 0.12);
    if(defender.hp < 0) {
      defender.hp = 0;
    }
    return Math.round(attacker.attack * 0.12);
  }

  public playGame(): void {
    if(this.play === false){
     this.play = true;
     this.fight();
    }
    else{
      this.play = false;
      this.fight();
    }
  }

  public async fight(): Promise<void> {
    let counter: number = 0;
    let turn: IPokemonProps[] = this.getFirstPlayerTurnBySpeed();
    let attacker: IPokemonProps = turn[0];
    let defender: IPokemonProps = turn[1];
    let attkPower: number;
    
    while(!this.isDead(attacker) && !this.isDead(defender) && this.play != false){
      await this.timer(this.interval);
      attkPower = await this.basicAttack(attacker, defender);
      this.log.push(attacker.name + " inflige " + attkPower + " de dégâts à " + defender.name + " : " + defender.hp + " HP.");
      counter++;
      defender = attacker;
      attacker = turn[counter % 2];
    }
  }

  constructor() { }
}
