import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http: HttpClient) {
   }

   getCharacters(){
    return this.http.get('https://rickandmortyapi.com/api/character')
   }
   getCharactersById(id: string){
    return this.http.get('https://rickandmortyapi.com/api/character/' + id)
   }


}
