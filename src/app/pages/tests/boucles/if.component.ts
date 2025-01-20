import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-if',
  standalone: true,
  template: `
  <div class="container m-5">
     <h2>&#64;if</h2>
    @if (user) {
    <div>
      <p>Nom:{{ user.firstName }}</p>
      <p>Prénom:{{ user.lastName }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
    } @else {
    <p>Aucun utilisateur sélectionné</p>
    }
  </div>
   
  `,
})
export class IfComponent {
  user: User | null = {
    id: 1,
    firstName: 'Alice',
    lastName: 'aline',
    email: 'alice@example.com',
  };
}
