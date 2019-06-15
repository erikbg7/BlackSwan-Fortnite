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
import {StatsComponent} from './components/fortnite/stats/stats.component';
import {MyguardGuard} from './services/guard/myguard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/api/home', pathMatch: 'full' },
  { path: 'api/home', component: HomeComponent },
  { path: 'api/store', component: StoreComponent },
  { path: 'api/challenges', component: ChallengesComponent },
  { path: 'api/login', component: LoginComponent },
  { path: 'api/signup', component: RegisterComponent },
  { path: 'api/manager', component: ManagerComponent, canActivate: [MyguardGuard] },
  { path: 'api/test', component: TestComponent },
  { path: 'api/myaccount', component: AccountComponent, canActivate: [MyguardGuard] },
  { path: 'api/t', component: TComponent },
  { path: 'api/stats/:epicId', component: StatsComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
