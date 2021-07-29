export interface IPokemonProps {
    name: string;
  base_experience: number;
    hp: number;
    attack: number;
    defense: number;
    picture: string;
    level: number;
    speed: number;
    ability: {
        name: string;
        power: number;
        chance: number;
        hiddenAbility: boolean;
    }[];
}

export interface IPokemon extends IPokemonProps {

}

export class Pokemon {
    name!: string;
    base_experience!: number;
    hp!: number;
    attack!: number;
    defense!: number;
    picture!: string;
    level!: number;
    speed!: number;
    ability!: {
        name: string;
        power: number;
        chance: number;
        hiddenAbility: boolean;
    }[];

    constructor(pokemon: IPokemonProps) {
       this.name = pokemon.name;
       this.base_experience = pokemon.base_experience;
       this.hp = pokemon.hp;
       this.attack = pokemon.attack;
       this.defense = pokemon.defense;
       this.picture = pokemon.picture;
       this.level = pokemon.level;
       this.speed = pokemon.speed;
       this.ability = pokemon.ability;
    }
}
