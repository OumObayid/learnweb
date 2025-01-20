import { Component, ElementRef, Input, ViewChild, viewChild } from '@angular/core';
import { User } from '../../../interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewChildrenEnfant2',
  imports:[CommonModule],
  standalone: true,
  template: `
  <div class="border border-2 p-2 m-5">
    <h3>Enfant</h3>
     <div #userInfo class="card mb-3 p-3  " [ngStyle]="{'border-color': highlighted ? 'blue' : 'gray'}">
      <h3>{{ user.firstName }} {{ user.lastName }}</h3>
      <p>Email: {{ user.email }}</p>
    </div>
  </div>   
  `,
  styles: [`
    .card {
      border: 2px solid;
      border-radius: 8px;
      transition: border-color 0.3s ease;
    }
    .card:hover {
      background-color:rgb(240, 213, 213);
    }
  `],
})
export class ViewChildrenEnfant2Component {
  // Input pour recevoir les données d'un utilisateur
  @Input() user!: User;

  // Propriété pour suivre l'état de la surbrillance
  highlighted = false;

// Accéder à l'élément DOM interne   
  // @ViewChild('userinfo') userInfoElmt!: ElementRef;
  userInfoElmt=viewChild<ElementRef>('userInfo');

  /**
   * Met en évidence la carte utilisateur
   */
  highlightUser() {
    this.highlighted = true;      
    const element = this.userInfoElmt(); // Accède à l'élément DOM correspondant
    if (element) {
      element.nativeElement.style.backgroundColor = 'yellow'; // Applique un style via ViewChild
    }      
    
  }
}
