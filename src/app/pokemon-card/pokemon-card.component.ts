import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../_model/Pokemon";
import {Type} from "../../_model/Type";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent{
  @Input()
  public pokemon: Pokemon | undefined;


  public leadingZero(str: string | number | undefined,size=3):string{
    let s=String(str);
    while (s.length < (size || 2)){
      s = '0'+s;
    }
    return s;
  }

}


