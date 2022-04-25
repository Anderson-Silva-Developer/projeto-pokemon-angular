import {Component, Input, OnInit} from '@angular/core';
import {getPokemonImage, getPokemonNumber, Pokemon} from "../../_model/Pokemon";
import {Type} from "../../_model/Type";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent{
  @Input()
  public pokemon: Pokemon | undefined;

  public getPokemonNumber=getPokemonNumber;
  public getPokemonImage=getPokemonImage;





}


