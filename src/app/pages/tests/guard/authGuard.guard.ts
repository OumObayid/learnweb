import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from '../../../ngrx/data.slice';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);
  const store = inject(Store);
  // Vérifiez si l'utilisateur est connecté (par exemple, via un token)
  // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  let isLoggedIn :boolean=false;
  store.select(selectIsLoggedIn).subscribe(islog=>isLoggedIn=islog)
  if (isLoggedIn) {
    return true; // Autorise l'accès
  } else {
    // Redirige l'utilisateur vers la page de connexion
    router.navigate(['/login']);
    return false; // Bloque l'accès
  }
};