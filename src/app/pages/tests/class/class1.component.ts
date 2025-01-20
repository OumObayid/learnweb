import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-class1',
  imports: [],
  template: `
    <div class="container mt-5">
      <h1>Liaison conditionnelle d'une classe</h1>
      <hr />
      <div [class.active]="isUserActive">
       <p>{{ user.firstName }}</p> 
       <p>{{ user.lastName }}</p> 
       <p>{{ user.email }}</p> 
      </div>
      <button class="btn btn-secondary text-white mb-5" (click)="toggleActive()">
        {{
            isUserActive? "remove Active user" : "set active user"
        }}
    </button>
    </div>
  `,
  styles: `
  .active{
    background:yellow;
    

  }
  div div{
    padding:15px;
    margin-bottom:26px;
    border:1px solid gey;
    border-radius:25px;
    box-shadow:0px 3px 4px grey;
    
  }
  `,
})
export class Class1Component {
  isUserActive: boolean = false;
  user: User = {
    id: 1,
    firstName: 'oumaima',
    lastName: 'el obayid',
    email: 'oum@gmail.com',
  };
  
  toggleActive(){
    this.isUserActive= ! this.isUserActive;
  }
}
