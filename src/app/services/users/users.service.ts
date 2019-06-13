import { Injectable } from '@angular/core';
import {Environment} from '../environment';
import {User} from '../../models/user/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  environment: Environment;

  users: User[];



  constructor(private http: HttpClient) {
    this.environment = new Environment();
  }

  getUsers() {
    return this.http.get(this.environment.urlUsers);
  }

  deleteUser(id: string) {
    return this.http.delete(this.environment.urlUsers + '/' + id);
  }

}
