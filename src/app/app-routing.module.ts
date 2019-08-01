import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'questions', loadChildren: './questions/questions.module#QuestionsPageModule' },
  { path: 'game-config', loadChildren: './game-config/game-config.module#GameConfigPageModule' },  { path: 'game-end', loadChildren: './game-end/game-end.module#GameEndPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
