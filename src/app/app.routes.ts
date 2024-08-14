import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { CreateComponent } from './create/create.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CargamentoComponent } from './cargamento/cargamento.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí


import { logueadoGuard } from './logueado.guard';



export const routes: Routes = [
    { path: "header", component: HeaderComponent },
    { path: "dashboard", component: DashboardComponent},
    { path: "footer", component: FooterComponent },
    { path: "create", component: CreateComponent, canActivate:[logueadoGuard]},
    { path: "navbar", component: NavbarComponent },
    { path: "cargamento", component: CargamentoComponent,canActivate:[logueadoGuard] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes),FormsModule],
    exports: [RouterModule]
  })

export class AppRoutingModule { }

