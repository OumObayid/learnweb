import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthUserService } from '../../../services/auth/login.service';
import { setActiveUser } from '../../../ngrx/data.slice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  template: `  
    <div class="container">
      <h1>Système de connexion</h1>
      <hr />
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card shadow">
            <div class="card-header text-center bg-primary text-white">
              <h4>Connexion</h4>
            </div>
            <div class="card-body">
              <form (ngSubmit)="onLogin()" #loginForm="ngForm">
                <!-- Nom d'utilisateur -->
                <div class="mb-3">
                  <label for="email" class="form-label"
                    >Nom d'utilisateur</label
                  >
                  <input
                    type="text"                   
                    name="email"
                    [(ngModel)]="email"
                    class="form-control"
                    required
                  />
                  <!-- Ce code est utile pour afficher un message d'erreur après soumission d'un formulaire lorsque le champ email est vide -->
                  <div                  
                    *ngIf="loginForm.submitted && !email"
                    class="text-danger small mt-1"
                  >
                    Veuillez entrer votre email.
                  </div>
                </div>

                <!-- Mot de passe -->
                <div class="mb-3">
                  <label for="password" class="form-label">Mot de passe</label>
                  <input
                    type="password"                    
                    name="password"
                    [(ngModel)]="password"
                    class="form-control"
                    required
                  />
                  <div
                    *ngIf="loginForm.submitted && !password"
                    class="text-danger small mt-1"
                  >
                    Veuillez entrer votre mot de passe.
                  </div>
                </div>

                <!-- Message d'erreur -->
                <div *ngIf="errorMessage" class="alert alert-danger py-1">
                  {{ errorMessage }}
                </div>

                <!-- Bouton de connexion -->
                <div class="d-grid">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    [disabled]="!loginForm.valid"
                  >
                    Se connecter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(
    private authService: AuthUserService,
    private router: Router,
    private store: Store
  ) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response.message === 1) {
          console.log(response.user);
          this.store.dispatch(setActiveUser()); // Mise à jour de l'état global
          localStorage.setItem('user', JSON.stringify(response.user)); // Sauvegarder les données utilisateur
          this.router.navigate(['/dashboard']); // Redirection vers le tableau de bord
        } else {
          this.errorMessage = response; // Affichage des erreurs renvoyées par le serveur
        }
      },
      error: () => {
        this.errorMessage = 'Erreur de connexion au serveur';
      },
    });
  }
}
