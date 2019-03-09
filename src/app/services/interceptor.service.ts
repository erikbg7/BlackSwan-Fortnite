import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  // We use Injector to get an instance of the product service
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = req.clone({
      headers: req.headers.set(
        'TRN-Api-Key', '8869a7e8-f12f-465c-b187-a59f6a178984'
      )
    });

    // Middleware
    return next.handle(newRequest);
  }
}
