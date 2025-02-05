
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { removeActiveUser } from '../../ngrx/data.slice';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  template: `
  <h1>hello from dashboard</h1>
  <div class="container mt-5">
      <h2>Bienvenue sur le tableau de bord</h2>
      <button class="btn btn-danger mt-3" (click)="logout()">Se déconnecter</button>
    </div>
  `,
  styles: ``,
})
export class DashboardComponent  {
  constructor(private store: Store, private router: Router) {}

  logout() {
    this.store.dispatch(removeActiveUser()); // Met à jour l'état pour se déconnecter
    this.router.navigate(['/login']); // Redirige vers la page de connexion
  }
}
