import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CategoriesHttpService } from './../../../services/categories/categoriesHttp.service';
import { Component, OnInit } from '@angular/core';
import { addCategories, selectCategories } from '../../../ngrx/data.slice';
import { Categorie } from '../../../interfaces/categorie';

@Component({
  selector: 'app-ngrx',
  imports: [CommonModule],
  template: `
    <div class="container mt-3">
      <h1>Test de la requête ngrx</h1>
      <button class="btn btn-primary" (click)="showCategories()">
        Afficher tous les categories
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
      <hr />
    </div>
  `,
})
export class NgrxComponent implements OnInit {
  constructor(
    private categoriesHttpService: CategoriesHttpService,
    private store: Store
  ) {}
  categories: Categorie[] = [];
  hasError: boolean = false
  isClicked: boolean = false;

  ngOnInit(): void {
    this.fetchCategories();
  }
  fetchCategories() {
    this.categoriesHttpService
      .getCategories()
      .subscribe({
        next: (response) => {
          if (response?.success) {
            this.store.dispatch(addCategories(response.dataCat || []))
          } else {
            console.log(response.message);
          }
        },
        error: (err) => {
          console.error('Erreur :', err);
          this.hasError = true;
        },
      }

      );
  }
  showCategories() {
    this.store
      .select(selectCategories)
      .subscribe((categories) => (this.categories = categories));
    this.isClicked = true;
  }

}