import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-style3',
  imports:[FormsModule],
  template: `
    <div class="container mt-5">
      <h1>Liaison multiple avec une chaîne de caractères</h1>
      <hr />
      <div [style]="activeStyles" class="card mb-3 p-3">
        <p><strong>First Name:</strong> {{ user.firstName }}</p>
        <p><strong>Last Name:</strong> {{ user.lastName }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>
<input class="form-control" type="text" [ngModel]="bgcolor" (input)="handlChange($event)">
      <!-- <button class="btn btn-primary text-white my-5" (click)="toggleStyles()">
        {{ isActiveStyles ? 'Retirer le Style' : 'Appliquer le Style' }}
      </button> -->
    </div>
  `,
  styles: ``,
})
export class Style3Component {
  bgcolor:string="#d9ba0b";  
    activeStyles: string= "";

  user: User = {
    id: 1,
    firstName: 'Oumaima',
    lastName: 'Elo',
    email: 'oum@gmail.com',
  };
  handlChange(event:Event){
    const target = event.target as HTMLInputElement
    this.activeStyles =
    `background-color: ${target.value}; padding: 16px; border-radius: 15px; box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);`;

  }
  
}
