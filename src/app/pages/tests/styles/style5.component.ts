import { Component, Input } from '@angular/core';
import { User } from '../../../interfaces/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-style5',
  imports:[FormsModule],
  template: `
    <div class="container my-3">
        <h1> Combinaison des approches</h1>
        <hr>
      <div class="user-card"  [style]="baseStyles"
         [style.color]="textColor"
         [style.font-size.px]="fontSize">
         <p>{{ user.firstName }}</p>
        <p>{{ user.lastName }}</p>
        <p>{{ user.email }}</p>
      </div>
      <input class="form-control" type="text" [(ngModel)]="textColor" placeholder="choisir une couleur">
      <input class="form-control" type="text" [(ngModel)]="fontSize" placeholder="choisir un font">
      
    </div>
  `,
  styles: [
    `
      .user-card {
        padding: 20px;
        margin: 10px;
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
        background: #f9f9f9;
        transition: all 0.3s ease;
      }
      .user-card.active {
        background: #cce5ff;
        border-color: #007bff;
        box-shadow: 0px 4px 8px rgba(0, 123, 255, 0.4);
      }
      .btn {
        padding: 10px 20px;
        border-radius: 5px;
      }
    `,
  ],
})
export class Style5Component {
  textColor:string="";
  fontSize:string="";
  baseStyles:string="background-color:#99bde4 ; padding: 16px; border-radius: 15px; box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);"
 user: User = {
    id: 1,
    firstName: 'oumaima',
    lastName: 'el',
    email: 'oum@gmail.com',
  };
 
}
