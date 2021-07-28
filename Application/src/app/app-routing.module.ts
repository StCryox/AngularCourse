import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChoosePokemonComponent} from './components/choose-pokemon/choose-pokemon.component';
import {BattleComponent} from './components/battle/battle.component';

const routes: Routes = [
  {path: '', redirectTo: '/choose-pokemon', pathMatch: 'full'},
  {path: 'choose-pokemon', component: ChoosePokemonComponent},
  {path: 'battle', component: BattleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
