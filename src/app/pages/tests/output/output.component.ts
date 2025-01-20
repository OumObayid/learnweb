// Importation des modules nécessaires depuis Angular
import { Component } from '@angular/core';
// Importation du composant enfant utilisé dans ce composant
import { OutputEnfantComponent } from './outputEnfant.component';


@Component({
  // Définition du sélecteur qui sera utilisé dans le template HTML pour inclure ce composant
  selector: 'app-output',

  // Importation du composant enfant pour pouvoir l'utiliser dans le template
  imports: [OutputEnfantComponent],

  // Template HTML du composant
  template: `
    <div class="container mt-5 border">
      <!-- Section parent -->
      <h4 class="p-3">Parent</h4>

      <div class="border p-3">
        <!-- Titre de la section enfant -->
        <h4>Enfant</h4>

        <!-- Inclusion du composant enfant avec liaison d'événement -->
        <!-- L'événement "message" émis par le composant enfant est capturé et passé à la méthode "receiveMessage()" -->
        <app-outputEnfant (message)="receiveMessage($event)"></app-outputEnfant>

        <!-- Affichage du message reçu de l'enfant -->
        <div>
          Message reçu de mon enfant: 
          <!-- Affichage dynamique du message avec une classe Bootstrap pour le styliser -->
          <span class="text-danger">{{ message }}</span>
        </div>
      </div>
    </div>
  `,

  // Zone pour définir des styles CSS spécifiques au composant (aucun style défini ici)
  styles: ``,
})
export class OutputComponent {
  // Propriété pour stocker le message reçu depuis le composant enfant
  message: string = '';

  // Méthode appelée lorsqu'un message est reçu depuis le composant enfant
  // Le paramètre "mess" correspond à la valeur émise par l'événement "message" dans l'enfant
  receiveMessage(mess: string) {
    // Mise à jour de la propriété "message" avec la valeur reçue
    this.message = mess;
  }


}
