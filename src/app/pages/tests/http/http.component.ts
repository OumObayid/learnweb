import { CategoriesHttpService } from './../../../services/categories/categoriesHttp.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Categorie } from '../../../interfaces/categorie';


@Component({
  selector: 'app-http',
  standalone: true,
  imports: [CommonModule],
  providers: [CategoriesHttpService], // Facultatif si fourni en `root`

  template: `
    <div class="container mt-3">
      <h1>Test de la requête Http</h1>
      <button class="btn btn-primary" (click)="fetchCategories()">
        Afficher tous les categories de l'api
      </button>
      @if (categories.length>0) {
      <ul class="mt-3">
        @for (category of categories; track $index) {
        <li>{{ category.nom }}</li>
        }
      </ul>
      } @if (categories.length === 0 && hasError){
      <div class="alert alert-danger ">
        Une erreur est survenue lors de la récupération des catégories.
      </div>
      } @if (categories.length === 0 && !hasError && isClicked){
      <div class="alert alert-danger ">Aucune catégorie</div>
      }
    </div>
  `,
})

export class ClienthttpComponent {
  constructor(private categoriesHttpService: CategoriesHttpService) {}
  categories: Categorie[] = [];
  hasError: boolean = false;
  isClicked: boolean = false;
  fetchCategories() {
    this.hasError = false; // Réinitialisation de l'état d'erreur
   this.isClicked=true;
    //la difference avec axios est qu'il faut ajouter X-Requested-With dans l'api:header('Access-Control-Allow-Headers: Content-Type,X-Requested-With');
    // et au lieu de data dans la response on met response: response.data devient response.response
    this.categoriesHttpService.getCategories().subscribe({
      next: (response) => {
        if (response?.success) {
          this.categories = response.dataCat || []; // Vérifie que la clé existe
        } else {
          console.log(response.message);
        }
      },
      error: (err) => {
        console.error('Erreur :', err);
        this.hasError = true;
      },
    });
  }
}

          