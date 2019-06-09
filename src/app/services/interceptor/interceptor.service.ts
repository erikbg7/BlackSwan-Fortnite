import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Environment} from '../environment';

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

    const FortniteApiRequest = req.clone({ headers: req.headers.set('Authorization', 'c67a994a11116ccae4f8751bd5a19421')});


    console.error(req.url);

    // const newRequest = req.url === (this.environment.urlBase || this.environment.urlEpicUsername) ? storeRequest : authRequest;

    const newRequest = FortniteApiRequest;

    // Middleware
    return next.handle(newRequest);
  }


}
