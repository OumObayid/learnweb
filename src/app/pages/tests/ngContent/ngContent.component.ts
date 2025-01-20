import { Component } from "@angular/core";


@Component({
  selector: 'app-ngContent',
  imports: [],
  template: `
    <div class="card p-3 m-5 bg-success text-white fs-4">
      <ng-content/>
    </div>
  `,
  styles: ``,
})
export class NgContentComponent  {
  
}