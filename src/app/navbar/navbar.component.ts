import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { InisesionService } from '../core/service/inisesion.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DashboardComponent,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public iniciosesionService: InisesionService){}
}
