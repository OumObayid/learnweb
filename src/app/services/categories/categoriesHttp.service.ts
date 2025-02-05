import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesHttpService {

  constructor(private http: HttpClient) { }
  // ou
  // private http = inject(HttpClient);
    private baseURL: string = environment.apiURL;
    private apiUrl = `${this.baseURL}/categories/getCategories.php`;
  //fetch all categories
    getCategories(): Observable<any> {
        try {
          // Appel à l'API pour récupérer les produits
          const response =  this.http.get<any>(this.apiUrl);
          // console.log('response service getCategories:', response);

          return response;

        } catch (error) {
          // Gestion des erreurs : affiche un message dans la console
          console.error('Erreur lors de la récupération des categories', error);

          // Propage l'erreur pour qu'elle puisse être gérée par l'appelant
          throw error;
        }


      }

}
