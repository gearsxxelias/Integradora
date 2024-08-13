import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InisesionService {

  private apiurl = 'https://localhost:5500/usuarios/login';

  constructor(private router: Router, private http: HttpClient) { }

  login(usuario: object) {
    return this.http.post<any>(this.apiurl, usuario).pipe(
      tap(response => {
        if (response.jwtoken) { 
          alert(response.msj); 
          localStorage.setItem('authToken', response.jwtoken); 
          localStorage.setItem('usuario', response.email); 
//          this.router.navigate(['/create']);
        }
      })
    );
  }

  eslogueado(): boolean {
    return !! localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/iniciosesion']);
  }
}