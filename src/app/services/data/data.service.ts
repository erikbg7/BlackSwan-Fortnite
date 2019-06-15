import { Injectable } from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';

@Injectable({ providedIn: 'root' })

export class DataService {

  private subject = new Subject<any>();


  sendMessage(message?: string, active?: boolean) {
    this.subject.next({ text: message, login: active });
  }

  updateState(active: any) {
    this.subject.next(active);
  }

  getState(): Observable<any> {
    return this.subject.asObservable();
  }
}


