import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports:[CommonModule],
  standalone: true,
  template: `
    <div class="container mt-5">
      <h1>Exemples de Pipes en Angular</h1>
      <hr />

      <!-- Pipe Uppercase -->
      <p><strong>Uppercase Pipe :</strong></p>
      <p>Texte original : {{ text }}</p>
      <p>Avec Uppercase : {{ text | uppercase }}</p>

      <!-- Pipe Lowercase -->
      <p><strong>Lowercase Pipe :</strong></p>
      <p>Avec Lowercase : {{ text | lowercase }}</p>

      <!-- Pipe Titlecase -->
      <p><strong>Titlecase Pipe :</strong></p>
      <p>Avec Titlecase : {{ text | titlecase }}</p>

      <!-- Pipe Date -->
      <p><strong>Date Pipe :</strong></p>
      <p>Date originale : {{ today }}</p>
      <p>Format court : {{ today | date:'short' }}</p>
      <p>Format long : {{ today | date:'long' }}</p>
      <p>Format personnalisé : {{ today | date:'dd/MM/yyyy HH:mm:ss' }}</p>

      <!-- Pipe Currency -->
      <p><strong>Currency Pipe :</strong></p>
      <p>Montant original : {{ amount }}</p>
      <p>En USD : {{ amount | currency:'USD' }}</p>
      <p>En EUR : {{ amount | currency:'EUR':'symbol':'1.2-2' }}</p>

      <!-- Pipe Percent -->
      <p><strong>Percent Pipe :</strong></p>
      <p>Valeur originale : {{ percentage }}</p>
      <p>En pourcentage : {{ percentage | percent:'1.1-2' }}</p>

      <!-- Pipe Decimal -->
      <p><strong>Decimal Pipe :</strong></p>
      <p>Valeur originale : {{ decimalValue }}</p>
      <p>Formatée : {{ decimalValue | number:'1.2-3' }}</p>

      <!-- Pipe JSON -->
      <p><strong>JSON Pipe :</strong></p>
      <p>Objet utilisateur :</p>
      <pre>{{ user | json }}</pre>

      <!-- Pipe Slice -->
      <p><strong>Slice Pipe :</strong></p>
      <p>Texte original : {{ text }}</p>
      <p>Extrait (0 à 5) : {{ text | slice:0:5 }}</p>

      <!-- Pipe Async -->
      <p><strong>Async Pipe :</strong></p>
      <p>Valeur retournée par une promesse : {{ asyncValue | async }}</p>
    </div>
  `,
})
export class PipesComponent {
  // Propriétés pour démonstration des pipes
  text: string = 'exemple de texte angular pipes'; // Utilisé pour les pipes textuels
  today: Date = new Date(); // Date actuelle
  amount: number = 1234.56; // Montant pour Currency Pipe
  percentage: number = 0.758; // Pourcentage pour Percent Pipe
  decimalValue: number = 12345.6789; // Valeur pour Decimal Pipe
  user = { id: 1, name: 'Oumaima', email: 'oumaima@example.com' }; // Objet pour JSON Pipe
  asyncValue = new Promise((resolve) =>
    setTimeout(() => resolve('Valeur chargée par promesse'), 2000)
  ); // Promesse pour Async Pipe
}
