import { TestBed } from '@angular/core/testing';

import { PokemonBattleService } from './pokemon-battle.service';
import {Pokemon} from '../../models/pokemon.model';
import {DecimalPipe} from '@angular/common';
import {NgModule} from '@angular/core';



const Tortank = {
  name: 'Tortank',
  max_hp: 35,
  hp: 50,
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

const Draco = {
  name: 'Draco',
  max_hp: 5,
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

const pokemon1 = new Pokemon(Tortank);
const pokemon2 = new Pokemon(Draco);
Tortank.hp = 0;
const pokemonDead  = new Pokemon(Tortank);

describe('PokemonBattleService', () => {
  let service: PokemonBattleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecimalPipe]
    });
    service = TestBed.inject(PokemonBattleService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('Verify if a pokemon with 0 HP is dead',  () => {
    expect(service.isDead(pokemonDead)).toBeTruthy();
  });

  test('Verify that a pokemon with more than 1 HP is alive ', () => {
    expect(service.isDead(pokemon2)).toBeFalsy();
  });

  // Async Test
  test('Basic attack from a pokemon', () => {
    return service.basicAttack(pokemon1, pokemon2).then(data => {
      expect(data).toBe(Math.round(pokemon1.attack * 0.12));
    });
  });

  const basicAttack = async () => {
    await service.basicAttack(pokemon1, pokemonDead);
  };


  it('Basic attack on a dead pokemon', () => {
    expect(basicAttack()).rejects.toThrow();
});
});
