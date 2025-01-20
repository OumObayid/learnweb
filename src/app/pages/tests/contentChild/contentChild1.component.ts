import { ContentChildEnfant1Component } from './contentChildEnfant1.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contentChild1',
  imports: [ContentChildEnfant1Component],
  template: `
    <div class="container mt-5">
      <h1>contentChild: accéder aux éléments enfants d'un composant</h1>
      <app-contentChildEnfant1Component>
        <h2 #cardTitle>John Doe</h2>
        <p>Développeur Web</p>
        <p>Lorem ipsum dolor sit amet...</p>
      </app-contentChildEnfant1Component>
    </div>
  `,
  styles: ``,
})
export class ContentChild1Component {}
