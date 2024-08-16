import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';



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

  consultatodaMateria(){
    return this.http.get<any[]>(this.url);
    
  }

  modificarMat(Materia:object){
    return this.http.put<any>(this.url,Materia)
    
  }

  eliminarMat(materiaPrima:string){ 
    return this.http.delete<any>(this.url + "/" +  materiaPrima);
    
  }
}