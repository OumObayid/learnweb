import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-ajax',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-3">
      <h1>Test de la requête AJAX</h1>
      <button class="btn btn-primary" (click)="fetchCategories()">
        Afficher tous les categories de l'api
      </button>

      <ul class="mt-3" *ngIf="categories.length > 0">
        <li *ngFor="let category of categories">{{ category.nom }}</li>
      </ul>

      <div
        *ngIf="categories.length === 0 && hasError"
        class="alert alert-danger "
      >
        Une erreur est survenue lors de la récupération des catégories.
      </div>
</div>
`,
})
export class AjaxComponent {
  private baseURL: string = environment.apiURL;
  categories: any[] = [];
  hasError: boolean = false;

  fetchCategories(): void {
    this.hasError = false; // Réinitialisation de l'état d'erreur

    //la difference avec axios est qu'il faut ajouter X-Requested-With dans l'api:header('Access-Control-Allow-Headers: Content-Type,X-Requested-With');
    // et au lieu de data dans la response on met response: response.data devient response.response

    ajax({
      url: this.baseURL+'/categories/getCategories.php',
      method: 'GET',
    }).subscribe({
      next: (response: any) => {
        console.log('response :', response.response);
        if (response.response.success) {
          this.categories = response.response.dataCat || []; // Assurez-vous que la clé existe
          console.log('this.categories :', this.categories);
        } else console.log(response.response.message);
      },
      error: () => {
        this.hasError = true;
      },
    });
  }
}
        