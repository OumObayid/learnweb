import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-style1',
  imports: [],
  template: `
    <div class="container mt-5">
      <h1>Liaison d'une propriété style unique</h1>
      <hr />
      <div [style.visibility]="isVisible ? 'visible' : 'hidden'">
        <p>{{ user.firstName }}</p>
        <p>{{ user.lastName }}</p>
        <p>{{ user.email }}</p>
      </div>
      <button
        class=" w-25 btn btn-secondary text-white mb-5"
        (click)="toggleActive()"
      >
        {{ isVisible ? 'afficher' : 'masquer' }}
      </button>
    </div>
  `,
  styles: ``,
})
export class Style1Component {
  isVisible = true;
  user: User = {
    id: 1,
    firstName: 'oumaima',
    lastName: 'el obayid',
    email: 'oum@gmail.com',
  };

  toggleActive() {
    this.isVisible = !this.isVisible;
  }
}
