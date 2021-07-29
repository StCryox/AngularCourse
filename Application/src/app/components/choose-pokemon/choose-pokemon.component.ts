import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon-service/pokemon.service";
import {init} from "protractor/built/launcher";
import {Pokemon} from "../../models/pokemon.model";
import {filter, map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-choose-pokemon',
  templateUrl: './choose-pokemon.component.html',
  styleUrls: ['./choose-pokemon.component.css']
})
export class ChoosePokemonComponent implements OnInit {

  Tortank: Pokemon = {
    name: 'Tortank',
    base_experience: 45,
    hp: 45,
    attack: 55,
    defense: 40,
    picture: 'http://pa1.narvii.com/6999/375466c56bf59e558d9e0a504ec1ef4b80bd9e68r1-201-200_00.gif',
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

  Draco: Pokemon = {
    name: 'Dracofeu',
    base_experience: 45,
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

  Florizarre: Pokemon = {
    name: 'Florizarre',
    base_experience: 52,
    hp: 52,
    attack: 42,
    defense: 42,
    picture: 'https://shinyhunters.com/images/shiny/1.gif',
    level: 56,
    speed: 48,
    ability: [{
      name: 'Overgrow',
      power: 10,
      chance: 100,
      hiddenAbility: false
    },
      {
        name: 'Flower',
        power: 60,
        chance: 30,
        hiddenAbility: true
      }]
  };

  pokemon1!: Pokemon ;
  pokemon2!: Pokemon;
  pokemons: Pokemon[] = [this.Tortank, this.Draco, this.Florizarre];

  constructor(private pokemonService: PokemonService,
              private router: Router) { }

  ngOnInit(): void {

    this.pokemon1 = new Pokemon(this.Tortank);
    this.pokemon2 = new Pokemon(this.Florizarre);
  }

  goBattle(){
    this.router.navigateByUrl('/battle', { state: { pokemon1: this.pokemon1 , pokemon2: this.pokemon2 } });
  }

}
