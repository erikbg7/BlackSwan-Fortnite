import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerStatsComponent } from './components/player-stats/player-stats.component';

const routes: Routes = [
  { path: '', redirectTo: '/api/stats', pathMatch: 'full' },
  { path: 'api/stats', component: PlayerStatsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
