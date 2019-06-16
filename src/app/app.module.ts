import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './components/fortnite/store/store.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './services/interceptor/interceptor.service';
import { HomeComponent } from './components/view/home/home.component';
import { FooterComponent } from './components/view/footer/footer.component';
import { LoginComponent } from './components/management/login/login.component';
import { ChallengesComponent } from './components/fortnite/challenges/challenges.component';
import { NavbarComponent } from './components/view/navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegisterComponent } from './components/management/register/register.component';
import { ManagerComponent } from './components/management/manager/manager.component';
// social login module
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular-6-social-login';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TestComponent } from './components/test/test.component';
import { AccountComponent } from './components/management/account/account.component';
import {TComponent} from './components/fortnite/test/test.component';
import { StatsComponent } from './components/fortnite/stats/stats.component';



// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('341653766518554')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('859573338246-frqkf8vu0jelq7vsn4irapgsql29klvg.apps.googleusercontent.com')
      }
    ]
  );
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ChallengesComponent,
    NavbarComponent,
    RegisterComponent,
    ManagerComponent,
    TestComponent,
    AccountComponent,
    TComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    Ng2SearchPipeModule,
    SocialLoginModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}, {provide: AuthServiceConfig, useFactory: getAuthServiceConfigs}],
  bootstrap: [AppComponent]
})
export class AppModule { }
