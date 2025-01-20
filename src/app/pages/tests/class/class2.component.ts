import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-class2',
  imports: [],
  template: `
    <div class="container mt-5">
      <h1>Liaison directe avec une chaîne de caractères</h1>
      <hr />
      <div [class]="userClass">
       <p>{{ user.firstName }}</p> 
       <p>{{ user.lastName }}</p> 
       <p>{{ user.email }}</p> 
      </div>
      <button class="btn btn-secondary text-white mb-5" (click)="toggleClassName('active')">
       toggle active
    </button>
    <button class="btn btn-secondary text-white mx-3 mb-5" (click)="toggleClassName('elevated')">
       toggle elevated
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
    
    }

    .elevated{
      box-shadow:0px 3px 4px grey;
    }

  `,
})
export class Class2Component {
  userClass:string="active elevated";

  user: User = {
    id: 1,
    firstName: 'oumaima',
    lastName: 'el obayid',
    email: 'oum@gmail.com',
  };
  
  toggleClassName(className:string){
   if(this.userClass.includes(className)) {
    this.userClass=this.userClass.replace(className,"").trim();
   }
  else{
  this.userClass +=" " + className;}
  }
 
}
