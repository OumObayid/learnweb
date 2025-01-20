import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-style4',
  imports: [CommonModule,FormsModule],
  template: `
    <div class="container mt-5">
      <h1>4. Liaison avec un objet de styles</h1>
      <hr />
      <div [ngStyle]="userStyles">
        <p>{{ user.firstName }}</p>
        <p>{{ user.lastName }}</p>
        <p>{{ user.email }}</p>
      </div>
      <button
        class="btn btn-secondary text-white mb-5"
        (click)="removeBackground()"
      >
        <!-- {{ userStyles.backgroundColor!='' ? 'remove' : 'active' }} -->
        change
      </button>
    </div>
  `,
  styles: `
  div div{
    padding:15px;
    margin-bottom:26px;
    border:1px solid gey;
    border-radius:25px;
    color:black;
      }
  `,
})
export class Style4Component {
  user: User = {
    id: 1,
    firstName: 'oumaima',
    lastName: 'el',
    email: 'oum@gmail.com',
  };

  userStyles = {
    display: 'flex',
    padding: '16px',
    backgroundColor: '',
    fontSize: '1.2rem',
  };

  removeBackground() {
    console.log('Current userStyles:', this.userStyles);
  
    // Vérifie si la propriété backgroundColor est vide ou non
    if (this.userStyles['backgroundColor'] === '') {
      this.userStyles['backgroundColor'] = 'yellow'; // Ajoute un arrière-plan
    } else {
      this.userStyles['backgroundColor'] = ''; // Supprime l'arrière-plan
    }
  
    console.log('Updated userStyles:', this.userStyles);
  }
  
}
