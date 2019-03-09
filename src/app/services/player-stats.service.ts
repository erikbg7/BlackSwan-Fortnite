import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from './environment';


@Injectable({
  providedIn: 'root'
})
export class PlayerStatsService {

  environment: Environment;

  constructor(private http: HttpClient) {
    this.environment = new Environment();
  }

  getStore() {
    return this.http.get(this.environment.urlUser);
  }
}
