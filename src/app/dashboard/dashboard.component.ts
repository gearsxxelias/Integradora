import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';
import { InisesionService } from '../core/service/inisesion.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, RouterModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  usuario = {
    email: "",
    password: ""
  };

  constructor(private inisesionService: InisesionService, private router: Router) {}

  iniSesion() {
    this.inisesionService.login(this.usuario).subscribe(
      res => {
        alert(res.usu_enviado.msj);
        localStorage.setItem("usuario", res.usu_enviado.email);
        localStorage.setItem("token", res.usu_enviado.jwtoken);
        this.router.navigate(['/create']);
      },
      err => {
        console.log('Error recibido:', err); // Añade este log
        if (err.error && err.error.errores && err.error.errores.length > 0) {
          alert(err.error.errores[0].msg);
        } else if (typeof err.error === "string") {
          alert(err.error || "inicio de sesion fallido.");
        } else {
          alert("fallo en la respuesta");
        }
      }
    );
  }
}
