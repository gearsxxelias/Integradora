import { CanActivateFn, Router } from '@angular/router';
import { InisesionService } from './core/service/inisesion.service';
import { inject } from '@angular/core';

export const logueadoGuard: CanActivateFn = (route, state) => {
  const inisesionService = inject(InisesionService);
  const router = inject(Router);
  
  if(inisesionService.eslogueado()){
//    router.navigate(['/create'])
    return true;  
  }
  else{
    
    return false;
  }
};
