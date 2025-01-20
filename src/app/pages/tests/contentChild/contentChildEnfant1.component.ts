import { Component, contentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contentChildEnfant1Component',
  imports: [],
  template: `
    <div class="border p-3">
      <h3>Enfant</h3>
      <ng-Content />      
      <div>Titre de la carte : <span class="text-danger">{{title()?.nativeElement.textContent}}</span>
      </div>
    </div>
  `,
  styles: ``,
})
export class ContentChildEnfant1Component {
  title = contentChild<ElementRef>('cardTitle'); // c'est un signal
}
