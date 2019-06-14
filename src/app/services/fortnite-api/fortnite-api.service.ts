import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class FortniteApiService {

  environment: Environment;

  constructor(private http: HttpClient) {
    this.environment = new Environment();
  }

  getStore() {
    return this.http.get(this.environment.urlStore);
  }

  getChallenges() {
    return this.http.get(this.environment.urlChallenges);
  }

  getEpicId(username: string) {
    return this.http.get(this.environment.urlEpicUsername + username);
  }

  getStatistics(epicId: string) {
    return this.http.get(this.environment.urlStatistics + epicId + '&platform=pc');
  }

  getNews() {
    return this.http.get(this.environment.urlNews);
  }

  store() {
    return this.http.get(this.environment.store);
  }

}
