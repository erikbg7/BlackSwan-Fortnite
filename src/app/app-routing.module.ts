import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoreComponent} from './components/store/store.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/api/home', pathMatch: 'full' },
  { path: 'api/home', component: HomeComponent },
  { path: 'api/store', component: StoreComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
