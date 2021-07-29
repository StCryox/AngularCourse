import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { DataService } from 'src/app/services/data-service/data.service';
import { PokemonBattleService } from 'src/app/services/pokemon-battle-service/pokemon-battle.service';

@Component({
  selector: 'app-choose-pokemon',
  templateUrl: './choose-pokemon.component.html',
  styleUrls: ['./choose-pokemon.component.css']
})
export class ChoosePokemonComponent implements OnInit {
  pokemons: any[] = [];
  play: boolean = false;

  constructor(
    private dataService: DataService,
    public pokemonBattleService: PokemonBattleService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons()
    .subscribe((response: any) => {
      response.results.forEach((results: { name: string; }) => {
        this.dataService.getMoreData(results.name)
        .subscribe((uniqueResponse: any) => {
          this.pokemons.push(uniqueResponse);
          console.log(this.pokemons);
        })
      })
    });
  }

  public choosePokemon(pokemon: any): void {
      //this.pokemonBattleService.setPokemon(pokemon, this.pokemons[Math.floor(Math.random() * 10)]);
  }
}
