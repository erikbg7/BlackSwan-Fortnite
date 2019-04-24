import { Injectable } from '@angular/core';
import {Environment} from '../environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  environment: Environment;

  constructor(private http: HttpClient) {
    this.environment = new Environment();
  }

  accountGuardian() {
    return this.http.get(this.environment.urlStore);
  }

  getChallenges() {
    return this.http.get(this.environment.urlBase);
  }

}
