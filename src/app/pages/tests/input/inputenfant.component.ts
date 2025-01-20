import { Component, Input } from '@angular/core';
import { Categorie } from '../../../interfaces/categorie';

@Component({
  selector: 'app-inputenfant',
  imports: [],
  template: `
    <ul class="container">
      <li>{{ propscateg.id }} : {{ propscateg.nom }}</li>
    </ul>
  `,
})
export class InputenfantComponent {
  @Input() propscateg: Categorie = {
    id: 0,
    nom: '',
  };
}
