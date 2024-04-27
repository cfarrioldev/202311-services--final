import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
character: any = {};
id: string = ""

constructor(private rickAndMortyService: RickandmortyService, private route: ActivatedRoute){
  this.route.params.subscribe((params) => {
      this.id = params['id']
  })
}

ngOnInit(): void {
  this.rickAndMortyService.getCharactersById(this.id).subscribe((response) => {
    this.character = response
  })
}

}
