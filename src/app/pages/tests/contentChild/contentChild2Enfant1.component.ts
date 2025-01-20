import { Component, computed, contentChild } from '@angular/core';
import { ContentChild2Enfant2Component } from './contentChild2Enfant2.component';

@Component({
  selector: 'app-contentChild2Enfant1',
  imports: [],
  template: `
     <div class="card bg-secondary">
      <h2>Profil Utilisateur</h2>
      
      @if (badgeStatus()) {
        <p>Statut actuel : {{ badgeStatus() }}</p>
      }
      <ng-content />
      <h3 class="text-warning">i'm here from child 1</h3>
    </div>
  `,
     styles: [`
      .card {
        padding: 16px;
        border: 1px solid #ddd;
        border-radius: 8px;
      }
    `],
})
export class ContentChild2Enfant1Component {
  // Utilisation de ContentChild pour accéder à un composant enfant projeté dans le slot <ng-content>.
  badge = contentChild(ContentChild2Enfant2Component);

  // Propriété calculée qui retourne le statut du badge enfant.
  badgeStatus = computed(() => this.badge()?.status);
}
