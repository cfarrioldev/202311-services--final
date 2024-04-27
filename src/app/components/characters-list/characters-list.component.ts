import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characterList: any = []


  constructor(private rickAndMortyService: RickandmortyService){}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe((response: any) => {
      this.characterList = response.results
  });
  }

}
