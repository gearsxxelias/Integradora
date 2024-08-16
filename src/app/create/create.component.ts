import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenemPrimaService } from '../core/service/genem-prima.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  Materia = {
    materiaPrima: "",
    fechaRecepcion: "",
    cantidadRecibida: "",
    numeroLote: "",
    fechaCaducidad: ""
  };

  errorMessages: any = {}; // Para almacenar mensajes de error específicos

  constructor(private GenemPrimaService: GenemPrimaService, private router: Router) {}

  async GuardarMateria() {
    console.log('Datos enviados:', {
      materiaPrima: this.Materia.materiaPrima,
      fechaRecepcion: this.Materia.fechaRecepcion,
      cantidadRecibida: this.Materia.cantidadRecibida,
      numeroLote: this.Materia.numeroLote,
      fechaCaducidad: this.Materia.fechaCaducidad
    });
  
    try {
      await this.GenemPrimaService.GuardarMateria(
        this.Materia.materiaPrima,
        new Date(this.Materia.fechaRecepcion), 
        Number(this.Materia.cantidadRecibida), 
        Number(this.Materia.numeroLote), 
        new Date(this.Materia.fechaCaducidad)
      );
      alert('Materia prima registrada con éxito.');
      this.limpiarFormulario(); // Limpiar los campos del formulario
    } catch (error) {
      console.error('Error al registrar la materia prima:', error);
      alert('Error al registrar la materia prima.');
    }
  }

  limpiarFormulario() {
    this.Materia = {
      materiaPrima: "",
      fechaRecepcion: "",
      cantidadRecibida: "",
      numeroLote: "",
      fechaCaducidad: ""
    };
  }
}