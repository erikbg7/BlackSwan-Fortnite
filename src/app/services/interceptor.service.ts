import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Environment} from './environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {


  environment: Environment;
  // We use Injector to get an instance of the product service
  constructor() {
    this.environment = new Environment();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authRequest = req.clone({ headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)});
    const storeRequest = req.clone({ headers: req.headers.set('TRN-Api-Key', '8869a7e8-f12f-465c-b187-a59f6a178984')});

    console.log(req.url);

    const newRequest = req.url === this.environment.urlStore ? storeRequest : authRequest;

    // Middleware
    return next.handle(newRequest);
  }


}
