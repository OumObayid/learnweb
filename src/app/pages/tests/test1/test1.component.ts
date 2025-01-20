import { ProductsService } from './../../../services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';

import { Test1EnfantComponent } from './test1Enfant.component';

@Component({
  selector: 'app-test1',
  imports: [Test1EnfantComponent],
  template: `
    <div class="container mt-5">
      <div class="row">
        @for (product of products; track product.id) {
        <div class="col-md-3 col-12 mb-4 ">
          <app-test1Enfant [propsProduct]="product" ></app-test1Enfant>
        </div>
        } @empty {
        <p class="text-center">Aucun produit trouvé</p>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class Test1Component implements OnInit {
  constructor(private productsService: ProductsService) {}
  products: Product[] = [];
  ngOnInit(): void {
    this.fetchProducts();
  }
  async fetchProducts() {
    this.productsService
      .getProducts()
      .then((response) => {
        if (response.data.success) this.products = response.data.products;
        else console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
