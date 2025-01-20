import { ContentChild2Enfant1Component } from './contentChild2Enfant1.component';
import { Component } from '@angular/core';
import { ContentChild2Enfant2Component } from "./contentChild2Enfant2.component";

@Component({
  selector: 'app-contentChild2',
  imports: [ContentChild2Enfant1Component, ContentChild2Enfant2Component],
  template: `
    <div class="container mt-5">
     <h1>ContentChild: Accéder à un composant enfant dans la projection de contenu</h1>
     <hr>   
      <div>
        <h3>Parent</h3>
        <app-contentChild2Enfant1>
          <app-contentChild2Enfant2></app-contentChild2Enfant2>
        </app-contentChild2Enfant1>
        <h2>i'm here from parent</h2>
      </div>
    </div>
  `,
  styles: ``,
})
export class ContentChild2Component {}
