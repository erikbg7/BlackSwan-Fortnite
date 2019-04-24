import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoreComponent} from './components/fortnite/store/store.component';
import {HomeComponent} from './components/view/home/home.component';
import { ChallengesComponent } from './components/fortnite/challenges/challenges.component';
import { LoginComponent } from './components/management/login/login.component';
import {RegisterComponent} from './components/management/register/register.component';
import {ManagerComponent} from './components/management/manager/manager.component';
import {TestComponent} from './components/test/test.component';
import {AccountComponent} from './components/management/account/account.component';
import {TComponent} from './components/fortnite/test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/api/home', pathMatch: 'full' },
  { path: 'api/home', component: HomeComponent },
  { path: 'api/store', component: StoreComponent },
  { path: 'api/challenges', component: ChallengesComponent },
  { path: 'api/login', component: LoginComponent },
  { path: 'api/signup', component: RegisterComponent },
  { path: 'api/manager', component: ManagerComponent },
  { path: 'api/test', component: TestComponent },
  { path: 'api/account', component: AccountComponent },
  { path: 'api/t', component: TComponent }




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
