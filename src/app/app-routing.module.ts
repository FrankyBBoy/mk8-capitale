import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';

const routes: Routes = [
  { path: 'challenges', component: ChallengeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
