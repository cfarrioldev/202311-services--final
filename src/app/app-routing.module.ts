import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

const routes: Routes = [
  {
    path: 'characters', component: CharactersListComponent
  },
  {
    path: 'characters/detail/:id', component: CharacterDetailsComponent
  },
  {
    path: '**', redirectTo: 'characters'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
