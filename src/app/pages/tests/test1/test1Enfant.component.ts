// Importation des modules nécessaires depuis Angular
import { Component, Input } from '@angular/core';
// Importation de l'interface Product pour définir le type des données attendues
import { Product } from '../../../interfaces/product';

@Component({
  // Nom du sélecteur utilisé dans les templates pour inclure ce composant
  selector: 'app-test1Enfant',

  // Aucun module Angular ou bibliothèque supplémentaire n'est importé ici
  imports: [],

  // Template HTML du composant
  template: `
    <div class="card shadow-lg rounded-3" style="margin: 1rem;">
      <!-- Image du produit avec des bordures arrondies -->
      <img
        [src]="'data:image/jpeg;base64,' + propsProduct.image" 
        [alt]="propsProduct.nom" 
        class="card-img-top rounded-top" 
      />

      <!-- Contenu de la carte -->
      <div class="card-body">
        <!-- Titre du produit stylisé -->
        <h5 class="card-title text-center text-primary">
          {{ propsProduct.nom }} <!-- Affichage dynamique du nom du produit -->
        </h5>

        <!-- Description du produit avec des points de suspension si elle est trop longue -->
        <p
          class="card-text text-muted"
          style="font-size: 0.85rem; line-height: 1.4; max-height: 4.2rem; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;"
        >
          {{ propsProduct.description }} <!-- Affichage dynamique de la description -->
        </p>

        <!-- Bouton d'action -->
        <a href="#" class="btn btn-primary w-100 rounded-pill">
          Voir plus <!-- Texte du bouton -->
        </a>
      </div>
    </div>
  `,

  // Section pour ajouter des styles CSS spécifiques (vide ici)
  styles: ``,
})
export class Test1EnfantComponent {
  // Propriété d'entrée (`@Input`) pour recevoir les données du produit depuis un composant parent
  @Input() propsProduct: Product = {
    id: 0, // Identifiant unique du produit
    nom: '', // Nom du produit
    description: '', // Description du produit
    prix: 0, // Prix du produit
    categorie_id: '', // Identifiant de la catégorie associée au produit
    categorie_nom: '', // Nom de la catégorie associée au produit
    image: null, // Image du produit (au format base64 ou null par défaut)
  };
}
