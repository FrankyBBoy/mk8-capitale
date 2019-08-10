import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { ChallengeFormComponent } from './challenge-form/challenge-form.component';

const routes: Routes = [
  { path: 'challenges', component: ChallengeListComponent },
  { path: 'challenges/new', component: ChallengeFormComponent },
  { path: '', redirectTo: 'challenges', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
