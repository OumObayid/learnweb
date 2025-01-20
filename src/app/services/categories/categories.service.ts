import { Injectable } from '@angular/core'; // Fournit la fonctionnalité pour créer des services Angular.
import axios from 'axios'; 
import { environment } from '../../../environments/environment';

@Injectable({//@Injectable avec providedIn: 'root':  Cela signifie que le service CategoriesService sera accessible dans toute l'application sans avoir besoin de l'ajouter manuellement dans le tableau des providers d'un module.
  providedIn: 'root', // Déclare le service comme singleton disponible dans l'ensemble de l'application.
})
export class CategoriesService {
  // Propriété pour stocker l'URL de base de l'API, définie dans les fichiers d'environnement Angular.
  private baseUrl: string = environment.apiURL;

  /**
   * Méthode pour récupérer les catégories depuis une API.
   * @returns {Promise<any>} Retourne une promesse contenant les données des catégories ou une erreur en cas d'échec.
   */
  async getCategories(): Promise<any> {
    try {
      // Envoi d'une requête GET à l'API pour obtenir les catégories.
      const response = await axios.get(
        `${this.baseUrl}/categories/getCategories.php`
      );

      // Retourne la réponse de l'API en cas de succès.
      return response;

    } catch (error) {
      // Affiche une erreur dans la console en cas d'échec de la requête.
      console.error('Erreur lors de la récupération des catégories', error);

      // Relance l'erreur pour permettre au composant appelant de la gérer.
      throw error;
    }
  }
}
