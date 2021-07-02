import { Component } from '@angular/core';
import {Pokemon} from '../../model/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application';
  pokemons: {name: string, hp: number, picture: string, attack: number, speed: number}[] = [
    {
      name: 'Bulbizarre',
      hp: 100,
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      attack: 200,
      speed: 50
    },
    {
      name: 'Carapuce',
      hp: 150,
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
      attack: 200,
      speed: 51
    }
  ];

  firstToAttack(): void {
    const firstPokemonToAttack = this.pokemons[0].speed > this.pokemons[1].speed ? this.pokemons[0] : this.pokemons[1];
  }

  startFight(): void{

  }

}
