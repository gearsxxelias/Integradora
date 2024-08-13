import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenemPrimaService {

  private url = "https://localhost:5500/materiasPrimas";

  constructor(private http: HttpClient) { }

  GuardarMateria(
    materiaPrima: string,
    fechaRecepcion: Date, // Cambiado a string
    cantidadRecibida: number,
    numeroLote: number,
    fechaCaducidad: Date // Cambiado a string
  ): void {
    const data = {
      materiaPrima,
      fechaRecepcion,
      cantidadRecibida,
      numeroLote,
      fechaCaducidad
    };
//    const token = localStorage.getItem('token');

    // Configurar los encabezados con el token de autorización
//    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Hacer la solicitud HTTP con los encabezados
    this.http.post<any>(this.url, data)
      .subscribe(
        response => {
          console.log('Materia prima registrada con éxito:', response);
        },
        error => {
          console.error('Error al registrar la materia prima:', error);
        }
      );
  }

}