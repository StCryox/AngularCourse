export interface IPokemonProps {
    name: string;
    max_hp: number;
    hp: number;
    attack: number;
    picture: string;
    speed: number;
}

export interface IPokemon extends IPokemonProps {

}

export class Pokemon implements IPokemon {
    name: string;
    max_hp: number;
    hp: number;
    attack: number;
    picture: string;
    speed: number;

    constructor(pokemon: IPokemonProps) {
       this.name = pokemon.name;
       this.max_hp = pokemon.max_hp;
       this.hp = pokemon.hp;
       this.attack = pokemon.attack;
       this.picture = pokemon.picture;
       this.speed = pokemon.speed;
    }
}
