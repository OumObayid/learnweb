import { Component } from '@angular/core';

@Component({
  selector: 'app-contentChild2Enfant2',
  imports: [],
  template: `
    <div>
      <span class="badge">
        {{ status }}
      </span>
      <h4 class="text-white">i'm here from child2</h4>
    </div>
  `,
  styles: [
    `
      .badge {
        padding: 4px 8px;
        background-color: #4caf50;
        color: white;
        border-radius: 4px;
      }
    `,
  ],
})
export class ContentChild2Enfant2Component {
  status = 'En ligne';
}
