import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerStatsComponent } from './components/player-stats/player-stats.component';
import {StoreComponent} from './components/store/store.component';

const routes: Routes = [
  { path: '', redirectTo: '/api/store', pathMatch: 'full' },
  { path: 'api/store', component: StoreComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
