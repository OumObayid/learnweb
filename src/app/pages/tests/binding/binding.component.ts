
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent {
  // Pour l'interpolation et le Property Binding
  title = 'Angular 19 - Exemple de Binding';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  // Pour le Event Binding
  message = 'Cliquez sur le bouton pour voir le message!';
  onButtonClick() {
    this.message = 'Bonjour depuis Angular !';
  }

  // Pour le Two-Way Binding
  username = '';

  // Pour le Attribute Binding
  columnSpan = 2;

  // Pour le Class Binding
  isActive = true;

  // Pour le Style Binding
  textColor = 'blue';
}
