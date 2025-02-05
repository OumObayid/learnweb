import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'; // Import des modules nécessaires pour les formulaires
import { CommonModule } from '@angular/common'; // Import de CommonModule pour utiliser les directives Angular comme *ngIf

@Component({
  selector: 'app-ngForm', 
  standalone: true, // Indique que ce composant est autonome (ne fait pas partie d'un module Angular partagé)
  imports: [FormsModule, CommonModule], 
  template: `
    <div class="container p-5">
      <h1>ngForm: Passer ngForm dans ngSubmit dans le template</h1>
      <hr />      
     
      <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
        
        <!-- Champ pour le nom d'utilisateur -->
        <div class="mb-3">
          <label for="username">Username</label>
          <input
            class="form-control"
            type="text"
            id="username"
            name="username"
            ngModel
            required
            #username="ngModel"
            [class.is-invalid]="username.invalid && username.touched"
          />
          <!-- Message d'erreur affiché si le champ est invalide et a été touché -->
          <div *ngIf="username.invalid && username.touched" class="error">
            Username is required.
          </div>
        </div>

        <!-- Champ pour l'adresse email -->
        <div class="mb-3">
          <label for="email">Email</label>
          <input
            class="form-control"
            type="email"
            id="email"
            name="email"
            ngModel
            required
            #email="ngModel"
            [class.is-invalid]="email.invalid && email.touched"
          />
          <!-- Affichage des erreurs spécifiques au champ email -->
          <div *ngIf="email.errors?.['required'] && email.touched" class="error text-danger">
            Email is required.
          </div>
          <div *ngIf="email.errors?.['email'] && email.touched" class="error text-danger">
            Email invalid.
          </div>
        </div>

        <!-- Champ pour le mot de passe -->
        <div class="mb-3">
          <label for="password">Password</label>
          <input
            class="form-control"
            type="password"
            id="password"
            name="password"
            ngModel
            required
            #password="ngModel"
            [class.is-invalid]="password.invalid && password.touched"
          />
          <!-- Message d'erreur si le mot de passe est invalide -->
          <div *ngIf="password.invalid && password.touched" class="error">
            Password is required.
          </div>
        </div>

        <!-- Bouton de soumission désactivé si le formulaire est invalide -->
        <button class="btn btn-success" type="submit" [disabled]="!loginForm.valid">
          Login
        </button>
      </form>

      <!-- Affichage des données soumises si le formulaire a été rempli -->
      <div *ngIf="submittedDataa" class="mt-3">
        <h3>Submitted Data</h3>
        <p><strong>Username:</strong> {{ submittedDataa.username }}</p>
        <p><strong>Email:</strong> {{ submittedDataa.email }}</p>
        <p><strong>Password:</strong> {{ submittedDataa.password }}</p>
      </div>
    </div>
  `,
})
export class NgFormComponent {
  // Variable pour stocker les données soumises
  submittedDataa: { username: string; email: string; password: string } | null = null;

  onSubmit(formm: NgForm) {
    this.submittedDataa = formm.value; // Récupération des données du formulaire
    formm.reset(); // Réinitialisation du formulaire après soumission
  }
}
