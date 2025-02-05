import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-formcontrolgroup',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  template: `
    <div class="container m-5">
      <h2 class="text-center mb-4">
        Exemple complet : FormGroup et FormControl
      </h2>

      <!-- Formulaire principal -->
      <form
        [formGroup]="myForm"
        (ngSubmit)="onSubmit()"
        class="p-4 border rounded bg-light"
      >
        <!-- Champ Nom -->
        <div class="mb-3">
          <label for="name" class="form-label">Nom :</label>
          <input
            id="name"
            formControlName="name"
            class="form-control"
            placeholder="Entrez votre nom"
          />
          <!-- Gestion des erreurs -->
          <div *ngIf="name.invalid && name.touched" class="text-danger mt-1">
            <span *ngIf="name.errors?.['required']">Le nom est requis.</span>
            <span *ngIf="name.errors?.['minlength']"
              >Minimum 3 caractères.</span
            >
          </div>
        </div>

        <!-- Champ Email -->
        <div class="mb-3">
          <label for="email" class="form-label">Email :</label>
          <input
            id="email"
            formControlName="email"
            class="form-control"
            placeholder="Entrez votre email"
          />
          <!-- Gestion des erreurs -->
          <div *ngIf="email.invalid && email.touched" class="text-danger mt-1">
            <span *ngIf="email.errors?.['required']">L'email est requis.</span>
            <span *ngIf="email.errors?.['email']"
              >Format d'email invalide.</span
            >
          </div>
        </div>

        <!-- Champ Mot de Passe -->
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe :</label>
          <input
            id="password"
            type="password"
            formControlName="password"
            class="form-control"
            placeholder="Entrez votre mot de passe"
          />
          <!-- Gestion des erreurs -->
          <div
            *ngIf="password.invalid && password.touched"
            class="text-danger mt-1"
          >
            <span *ngIf="password.errors?.['required']"
              >Mot de passe requis.</span
            >
            <span *ngIf="password.errors?.['minlength']"
              >Minimum 6 caractères.</span
            >
          </div>
        </div>

        <!-- Champ indépendant avec FormControl -->
        <div class="mb-3">
          <label for="independentControl" class="form-label"
            >Champ indépendant :</label
          >
          <input
            id="independentControl"
            [formControl]="control"
            class="form-control"
            placeholder="Champ indépendant (non inclus dans le FormGroup)"
          />
          <!-- Gestion des erreurs -->
          <div
            *ngIf="control.invalid && control.touched"
            class="text-danger mt-1"
          >
            <span *ngIf="control.errors?.['required']"
              >Ce champ est requis.</span
            >
          </div>
        </div>

        <!-- Checkbox actif -->
        <div class="form-check mb-3">
          <input
            type="checkbox"
            formControlName="isActive"
            class="form-check-input"
            id="isActive"
          />
          <label for="isActive" class="form-check-label"
            >Activer l'utilisateur</label
          >
        </div>

        <!-- Boutons -->
        <div class="d-flex justify-content-between">
          <button
            type="submit"
            class="btn btn-success"
            [disabled]="myForm.invalid || control.invalid"
          >
            Soumettre
          </button>
          <button type="button" class="btn btn-secondary" (click)="resetForm()">
            Réinitialiser
          </button>
        </div>
      </form>
      <!-- Résultats -->
      <div class="mt-4">
        <h3>Valeurs actuelles du formulaire :</h3>
        // Affiche les valeurs du formulaire au format JSON
        <pre class="bg-light p-3 rounded border">{{ myForm.value | json }}</pre>
        <h3>Valeur du champ indépendant :</h3>
        <span *ngIf="control.value" class="bg-light p-3 my-3 rounded border">{{
          control.value
        }}</span>
      </div>
      <!-- Liste dynamique des compétences -->
      <div class="mb-1">
        <label for="skills" class="form-label">Compétences :</label>
        <ul class="list-group mb-2">
          <li
            *ngFor="let skill of skills; let i = index"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            {{ skill }}
            <button
              type="button"
              class="btn btn-sm btn-danger"
              (click)="removeSkill(i)"
            >
              Supprimer
            </button>
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <input
          type="text"
          class="form-control me-2"
          placeholder="Nouvelle compétence"
          [(ngModel)]="newSkill"
        />
        <button type="button" class="btn btn-primary" (click)="addSkill()">
          Ajouter
        </button>
      </div>
    </div>
  `,
  styles: [],
})
export class FormcontrolgroupComponent {
  // Définition du FormGroup avec ses contrôles enfants
   myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]), // Champ requis avec longueur min.
    email: new FormControl('', [Validators.required, Validators.email]), // Email valide requis.
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]), // Mot de passe avec longueur min.
    isActive: new FormControl(false), // Checkbox avec valeur booléenne.
  });

  // FormControl indépendant (pas lié au FormGroup)
  control: FormControl = new FormControl('', [Validators.required]);

  // Champs pour gérer les compétences
  skills: string[] = []; // Tableau des compétences
  newSkill: string = ''; // Champ pour la saisie d'une nouvelle compétence

  // Getter pour simplifier l'accès aux contrôles dans le template
  
  get name() {
    return this.myForm.get('name')!;
  } 
  get email() {
    return this.myForm.get('email')!;
  }
  get password() {
    return this.myForm.get('password')!;
  }

  // Fonction appelée lors de la soumission du formulaire
  onSubmit() {
    console.log('Formulaire soumis :', this.myForm.value);
    console.log('Valeur du champ indépendant :', this.control.value);
  }

  // Réinitialisation du formulaire
  resetForm() {
    this.myForm.reset(); // Réinitialise les champs du FormGroup
    this.control.reset(); // Réinitialise le champ indépendant
    this.skills = []; // Vide la liste des compétences
  }

  // Ajouter une nouvelle compétence
  addSkill() {
    if (this.newSkill.trim()) {
      console.log('newSkill :', this.newSkill);

      console.log('newSkill :', this.newSkill);
      this.skills.push(this.newSkill.trim());
      console.log('skills :', this.skills);
      this.newSkill = ''; // Vide le champ de saisie
    }
  }

  // Supprimer une compétence par son index
  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }
}
