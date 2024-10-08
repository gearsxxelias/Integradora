import { Component } from '@angular/core';
import { GenemPrimaService } from '../core/service/genem-prima.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí



@Component({
  selector: 'app-cargamento',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cargamento.component.html',
  styleUrl: './cargamento.component.css'
})
export class CargamentoComponent{
  
  
  materia: any[] = [];

  Materia = {
    materiaPrima: "",
    fechaRecepcion: "",
    cantidadRecibida: "",
    numeroLote: "",
    fechaCaducidad: ""
  };



  ngOnInit(){
    this.consultaMateria();
  }


  constructor(private GenemPrimaService: GenemPrimaService) {}


  consultaMateria(){
    this.GenemPrimaService.consultatodaMateria().subscribe(data => {
      this.materia = data; 
    });
  }


  modificarMat() {
    alert("Materia Prima actualizada correctamente");
  }


  eliminarMAT(materiaPrima: string) {
    if (confirm("¿Desea eliminar la materia prima" + materiaPrima +"?")) {
      this.GenemPrimaService.eliminarMat(materiaPrima).subscribe(
        ()=> {
          alert("Materia Prima eliminada");
          location.reload(); // Opcional: solo si quieres recargar la página
        },
        ()=> {
          alert("Error al eliminar");
        }
      );
    }
  }
}