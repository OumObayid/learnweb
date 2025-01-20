import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';


@Component({
  selector: 'app-class3',
  imports: [],
  template: `
    <div class="container mt-5">
      <h1>Liaison avec un tableau</h1>
      <hr />
      <!-- Div avec classes dynamiques -->
      <div [class]="userClassArray.join(' ')">
        <p>{{ user.firstName }}</p>
        <p>{{ user.lastName }}</p>
        <p>{{ user.email }}</p>
      </div>
      
      <!-- Boutons pour ajouter ou supprimer des classes -->
      <button
        class="btn btn-secondary text-white mb-3"
        (click)="toggleClassArray('active')"
      >
        {{ userClassArray.includes('active') ? 'Remove Active' : 'Set Active' }}
      </button>
      <button
        class="btn btn-secondary text-white mb-3"
        (click)="toggleClassArray('elevated')"
      >
        {{ userClassArray.includes('elevated') ? 'Remove elevated' : 'Set elevated' }}
      </button>
     
    </div>
  `,
  styles: `
    .active {
      background: yellow;
      /* Vous pouvez ajouter des styles supplémentaires */
    }

    .elevated {
      border: 2px solid blue;
      box-shadow: 0px 3px 10px blue;
      /* Vous pouvez ajouter des styles supplémentaires */
    }

    div div {
      padding: 15px;
      margin-bottom: 26px;
      border: 1px solid gray;
      border-radius: 25px;
    }
  `,
})
export class Class3Component {
  // Tableau de classes pour gérer les styles dynamiques
  userClassArray: string[] = ['active', 'elevated'];

  // Objet utilisateur pour affichage
  user: User = {
    id: 1,
    firstName: 'Oumaima',
    lastName: 'El Obayid',
    email: 'oum@gmail.com',
  };

  // Fonction pour ajouter ou supprimer une classe dynamiquement
  toggleClassArray(className: string): void {
    if (this.userClassArray.includes(className)) {
      // Supprimer la classe si elle existe
      this.userClassArray = this.userClassArray.filter(
        (cls) => cls !== className
      );
    } else {
      // Ajouter la classe si elle n'existe pas
      this.userClassArray.push(className);
    }
    console.log('this.userClassArray.join(\' \') :', this.userClassArray.join(' '));

  }
}
