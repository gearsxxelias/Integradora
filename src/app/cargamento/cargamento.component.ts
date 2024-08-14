import { Component } from '@angular/core';
import { GenemPrimaService } from '../core/service/genem-prima.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cargamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cargamento.component.html',
  styleUrl: './cargamento.component.css'
})
export class CargamentoComponent{
  
  
  materia: any[] = [];  


  ngOnInit(){
    this.consultaMateria();
  }


  constructor(private GenemPrimaService: GenemPrimaService) {}


  consultaMateria(){
    this.GenemPrimaService.consultatodaMateria().subscribe(data => {
      this.materia = data; 
    });
  }


}

