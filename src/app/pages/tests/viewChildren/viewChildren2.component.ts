import { Component, ElementRef, viewChild, viewChildren } from '@angular/core';
import { User } from '../../../interfaces/user';
import { ViewChildrenEnfant2Component } from './viewChildrenEnfant2.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewChildren2',
  imports: [ViewChildrenEnfant2Component, CommonModule],
  standalone: true,
  template: `
    <div class="container my-5">
      <h1>ViewChildren: Accéder aux composants enfants</h1>
      <hr />
      <div class="border border-3  p-3 ">
        <h3>Parent</h3>
        <!-- Boucle avec syntaxe correcte -->
        @for( user of users; track user.id){
        <app-viewChildrenEnfant2 [user]="user"></app-viewChildrenEnfant2>
        }
      </div>
      <button class="btn btn-primary mt-4" (click)="highlightAllUsers()">
        Mettre en évidence tous les utilisateurs
      </button>
    </div>
  `,
  styles: [
    `
      .container {
        font-family: Arial, sans-serif;
      }
      button {
        font-size: 1rem;
        padding: 0.5rem 1rem;
      }
    `
  ],
})
export class ViewChildren2Component {
  // Liste des utilisateurs
  users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' },
    { id: 3, firstName: 'Alice',lastName: 'Smith', email: 'alice@example.com',},
  ];

  // Accéder aux composants enfants
  userCards = viewChildren(ViewChildrenEnfant2Component);

  /**
   * TrackBy pour *ngFor
   */
  // trackById(index: number, item: User): number {
  //   return item.id;
  // }

  /**
   * Mettre en évidence tous les utilisateurs
   */

  highlightAllUsers() {
    this.userCards().forEach((card) => {
      card.highlightUser(); // Appelle la méthode du composant enfant
    });
  }
}
