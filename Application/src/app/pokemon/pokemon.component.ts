import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: {
    name: string;
    picture: string;
    hp: number;
    attack: number;
    speed: number
  } | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
