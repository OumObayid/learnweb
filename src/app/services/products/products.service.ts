import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl: string = environment.apiURL;
  
  async getProducts(): Promise<any> {
    try {
      const response=await axios.get(
        `${this.baseUrl}/products/getProducts.php`
      );
      return response;

    } catch (error) {
      console.error('erreur lors de la récupération des produits',error);
      throw error;
    }
  }
}
