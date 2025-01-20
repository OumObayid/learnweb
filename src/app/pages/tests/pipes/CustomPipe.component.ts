import { FormsModule } from '@angular/forms';

import { Component } from '@angular/core';
import { ReversePipe } from './Reverse.pipe'; // Importer le pipe

@Component({
  selector: 'app-pipes',
  imports: [FormsModule, ReversePipe],
  standalone: true,
  template: `
    <div class="container mt-5">
      <h1>Exemple de Pipe Personnalisé</h1>
      <hr />
      
      <!-- Input pour entrer un texte -->
      <input 
        type="text" 
        [(ngModel)]="textToReverse" 
        class="form-control mb-3" 
        placeholder="Saisissez un texte pour inverser"
      />

      <!-- Affichage du texte original -->
      <p><strong>Texte original :</strong> {{ textToReverse }}</p>

      <!-- Utilisation du pipe personnalisé -->
      <p><strong>Texte inversé :</strong> {{ textToReverse | reverse }}</p>
    </div>
  `,
})
export class CustomPipeComponent {
  textToReverse: string = ''; // Texte que l'utilisateur va saisir
}
