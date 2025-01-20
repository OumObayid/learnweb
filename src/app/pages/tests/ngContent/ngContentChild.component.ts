import { Component } from '@angular/core';
import { NgContentComponent } from './ngContent.component';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-ngContent-Child',
  imports: [NgContentComponent],
  template: `
    <div class=" container mt-3 ">
      <h1>ng-Content</h1>
      <hr />
     @for (user of users; track $index) {
       <app-ngContent>
        <p> {{user.firstName}} </p>
        <p> {{user.lastName}} </p>
        <p> {{user.email}} </p>
      </app-ngContent> 
     }
     @empty {
        <p>
            aucun utilisateur
        </p>
     }
      
    </div>
  `,
  styles: ``,
})
export class ngContentChildComponent {
  users: User[] = [
    {
      id: 1,
      firstName: 'Alice',
      lastName: 'aline',
      email: 'alice@example.com',
    },
    { id: 2, firstName: 'Bob', lastName: 'boby', email: 'bob@example.com' },
    {
      id: 3,
      firstName: 'Charlie',
      lastName: 'chary',
      email: 'charlie@example.com',
    },
  ];
}
