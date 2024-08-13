import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { InisesionService } from './inisesion.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  
  constructor(private InisesionService: InisesionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.InisesionService.getToken();
    const tokenReq = req.clone({
      setHeaders: {
        Authorization: '' + token

      }
    });

    return next.handle(tokenReq);
  }
}