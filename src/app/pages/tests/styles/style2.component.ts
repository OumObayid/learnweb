import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-style2',
  imports: [FormsModule],
  template: `
    <div class="container mt-5">
      <h1>Liaison avec unités</h1>
      <hr />
      <div [style.height.px]="cardHeight" class="border border-danger overflow-hidden p-4 mb-5">
       <p>{{ user.firstName }}</p> 
       <p>{{ user.lastName }}</p> 
       <p>{{ user.email }}</p> 
      </div>
      <input class="form-control  mb-5" type="number" [(ngModel)]="cardHeight"/>
    </div>
  `,
  styles: ` `,
})
export class Style2Component {
  cardHeight = 200;

  user: User = {
    id: 1,
    firstName: 'oumaima',
    lastName: 'el obayid',
    email: 'oum@gmail.com',
  };
  
}
