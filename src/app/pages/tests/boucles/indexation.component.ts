import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-users',
  standalone: true,
  template: `
    <h2>Exemple avec &#64;for et propriétés d'indexation</h2>
    @for (user of users; track user.id) {
      <div>
        {{ user.firstName }} ({{ user.email }})
      </div>
    }
    @empty {
      <p>Aucun utilisateur trouvé</p>
    }
  `,
  
})
export class ForDirectiveComponent  {
  users: User[] = [
    { id: 1, firstName: 'Alice', lastName:'aline' , email: 'alice@example.com' },
    { id: 2, firstName: 'Bob', lastName:'boby' , email: 'bob@example.com' },
    { id: 3, firstName: 'Charlie', lastName:'chary' , email: 'charlie@example.com' }
  ];
}