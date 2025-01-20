import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class4',
  imports: [CommonModule],
  template: `
    <div class="container mt-5">
      <h1>Liaison avec un objet</h1>
      <hr />
      <div [ngClass]="userClassObject">
        <p>{{ user.firstName }}</p>
        <p>{{ user.lastName }}</p>
        <p>{{ user.email }}</p>
      </div>
      <button
        class="btn btn-secondary text-white mb-5"
        (click)="toggleClass('active')"
      >
        {{ userClassObject ? 'remove Active user' : 'set active user' }}
      </button>
      <button
        class="btn btn-secondary text-white mb-5"
        (click)="toggleClass('elevated')"
      >
        {{ userClassObject ? 'remove elevated user' : 'set elevated user' }}
      </button>
    </div>
  `,
  styles: `
  .active{
    background:green;
    color:white;
  }
  .elevated {
      border: 2px solid blue;
      box-shadow: 0px 3px 0px blue;
      margin-bottom:4p
    }
  div div{
    padding:15px;
    margin-bottom:26px;
    border:1px solid gey;
    border-radius:25px;
    color:black;
      }
  `,
})
export class Class4Component {
  userClassObject = {
    active: true,
    elevated: true,
  };
  user: User = {
    id: 1,
    firstName: 'oumaima',
    lastName: 'el obayid',
    email: 'oum@gmail.com',
  };

  toggleClass(className: string) {
    if (className == 'elevated'){
      console.log('this.userClassObject 1:', this.userClassObject);
    this.userClassObject['elevated'] = !this.userClassObject['elevated'];
    console.log('this.userClassObject 2:', this.userClassObject);
    }
    if (className == 'active'){
      console.log('this.userClassObject 3:', this.userClassObject);

    this.userClassObject['active'] = !this.userClassObject['active'];
    console.log('this.userClassObject 4:', this.userClassObject);
    }
  }
}
