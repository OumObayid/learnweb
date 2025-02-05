import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({ selector: 'app-container-template',
imports:[CommonModule],
template: `
<div class="container">
  <h1>ng-container / ng-template</h1>
  <hr />
  <!-- Bouton pour basculer entre connecté/déconnecté -->
  <button class="btn btn-primary" (click)="toggleLogin()">
    {{ isLoggedIn ? 'Se déconnecter' : 'Se connecter' }}
  </button>

  <!-- Affichage conditionnel avec ngIf et ng-template -->
  <ng-container *ngIf="isLoggedIn; else notLoggedIn">
    <h3>Bienvenue, utilisateur connecté !</h3>
  </ng-container>

  <ng-template #notLoggedIn>
    <h3>Vous êtes déconnecté. Veuillez vous connecter.</h3>
  </ng-template>

  <hr />

  <!-- Liste d'éléments avec *ngFor -->
  <h4>Liste des éléments :</h4>
  <button class="btn btn-secondary mb-3" (click)="toggleList()">
    {{ isListVisible ? 'Masquer la liste' : 'Afficher la liste' }}
  </button>

  <ng-container *ngIf="isListVisible; else emptyList">
    <ul>
      <li
        *ngFor="
              let item of items;
              index as i;
              first as isFirst;
              last as isLast
            "
      >
        {{ i + 1 }}. {{ item }}
        <span *ngIf="isFirst">(Premier)</span>
        <span *ngIf="isLast">(Dernier)</span>
      </li>
    </ul>
  </ng-container>

  <ng-template #emptyList>
    <p>La liste est masquée.</p>
  </ng-template>
</div>
`,
})

export class ContainerTemplateComponent {

isLoggedIn: boolean = false; // Pour basculer l'état connecté/déconnecté
items: string[] = ['Item1', 'Item 2', 'Item 3']; // Liste d'éléments
isListVisible: boolean = true; //Pour afficher ou masquer la liste

toggleLogin() {
  this.isLoggedIn =!this.isLoggedIn;
}

toggleList() {
  this.isListVisible = !this.isListVisible;
}

}