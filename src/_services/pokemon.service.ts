import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, ReplaySubject} from "rxjs";
import {Pokemon} from "../_model/Pokemon";
import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";
import {map, mergeMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokemons:Pokemon[]=[];

  constructor(
    private httpClient:HttpClient,
  ) {
    const  allPokemonUrl='https://pokeapi.co/api/v2/pokemon/?limit=100';
    this.httpClient.get<any>(allPokemonUrl).pipe(
      map(value => value.results),
      map((value) => {
        return from(value).pipe(
          mergeMap((v: any)=> this.httpClient.get(v.url))
        );
      }),
      mergeMap(value => value),
    ).subscribe((result:any) => {
      const pokemon: Pokemon={
        image:result.sprites.front_default,
        number:result.id,
        name:result.name,
        types:result.types.map((t:any) => t.type.name)
      };

      this.pokemons[result.id]=pokemon;
    });
  }
}
