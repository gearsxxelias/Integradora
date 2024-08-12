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
        if (response.jwtoken) { // Asumiendo que el token se llama jwtoken en la respuesta
          alert(response.msj); // Muestra el mensaje de la respuesta
          localStorage.setItem('authToken', response.jwtoken); // Guarda el token en el localStorage
          localStorage.setItem('usuario', response.email); // Guarda el usuario en el localStorage
          this.router.navigate(['/catalogo']); // Redirige a /catalogo
        }
      })
    );
  }

  eslogueado(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/iniciosesion']);
  }
}