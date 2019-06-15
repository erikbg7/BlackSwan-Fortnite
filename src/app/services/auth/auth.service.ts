import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user/user';
import { Environment } from '../environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private loginSource = new BehaviorSubject(!!localStorage.getItem('token'));
  loginActive = this.loginSource.asObservable();



  environment: Environment;
  selectedUser: User;



  private caca: boolean;


  constructor(private http: HttpClient) {
    this.selectedUser = new User();
    this.environment = new Environment();
    this.caca = false;
  }

  signup(user: User) {
    return this.http.post(this.environment.urlAuth + 'signup', user);
  }

  signin(user: User)  {
    return this.http.post(this.environment.urlAuth + 'signin', user);
  }

  check() {
    this.caca = !this.caca;
    console.error('caca ', this.caca);
    this.loginSource.next(!!localStorage.getItem('token'));
    //this.loginActive.subscribe(res => {
      //console.error('active', res);
    //});

  }

}
