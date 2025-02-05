import { FormsModule } from '@angular/forms';
import { Component, OnInit, viewChild, ElementRef } from '@angular/core';
import {
  Product,
  ProductService,
} from '../../../services/http/apinodejs/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// import { map } from 'rxjs';
import { map } from 'rxjs/operators'; 


@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, RouterLink],
  template: `
    <div class="container mt-3">
      <h1>crud-angular-nodejs-mongodb</h1>
      <hr />
      <h3>Products</h3>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
          *ngFor="let product of products"
        >
          <div class="card p-2 " style="width: 18rem; height: 100%">
            <div class="card-body">
              <strong>{{ product.nom }}</strong>
              <p>{{ product.description }}</p>
              <span class="badge bg-primary">{{ product.prix }} $</span>
              <p><strong>Categorie: </strong>{{ product.categorie_nom }}</p>
            </div>
            <button
              class="btn btn-danger btn-sm mt-2"
              (click)="deleteProduct(product._id!)"
            >
              Delete
            </button>
            <button
              class="btn btn-warning btn-sm mt-2"
              [routerLink]="['/update-node', product._id]"
            >
              Update
            </button>
          </div>
        </div>
      </div>
     

      <div class="my-4">
        <h3>Add Product</h3>

        <div class="form-group">
          <label for="productName">Nom</label>
          <input
            id="productName"
            type="text"
            class="form-control"
            [(ngModel)]="newProduct.nom"
            placeholder="Enter product name"
          />
        </div>

        <div class="form-group mt-2">
          <label for="productDescription">Description</label>
          <input
            id="productDescription"
            type="text"
            class="form-control"
            [(ngModel)]="newProduct.description"
            placeholder="Enter product description"
          />
        </div>

        <div class="form-group mt-2">
          <label for="productPrix">Prix</label>
          <input
            id="productPrix"
            type="number"
            class="form-control"
            [(ngModel)]="newProduct.prix"
            placeholder="Enter product price"
          />
        </div>

        <div class="form-group mt-2">
          <label for="productCategory">Categorie</label>
          <input
            id="productCategory"
            type="text"
            class="form-control"
            [(ngModel)]="newProduct.categorie_nom"
            placeholder="Enter product category"
          />
        </div>

        <button class="btn btn-success mt-2" (click)="addProduct()">Add</button>
      </div>
     
      
    </div>
  `,
  styles: `
// -------------------------style pour afficher le code source----------------
      .fa-check {
        color: grey;
      }

      i.fa-copy {
        cursor: pointer;
        color: grey;
        font-size: 20px;
        position: absolute;
        top: 20px;
        right: 20px;
        transition: color 0.5s ease, transform 0.3s ease;
        display: inline-block;
        padding: 10px;
      }

        i.fa-copy:hover{
          color:#aaacad;
        transform: scale(1.2); /* Effet d'agrandissement au survol */
        cursor: pointer; /* Change le curseur pour indiquer une action cliquable */
        }
        .confirm{
          position: absolute;
          top: 30px;
          right: 60px;
          color:grey;
            font-weight:bold;
        }
         .tab {
           background-color: #f8f9fa;
           padding: 15px;
           border: 1px solid #ddd;
           border-radius: 5px;
           overflow-x: auto;
           font-family: monospace;
         }
         .active {
        background-color:#eef06f !important; /* Couleur de l'onglet actif */
        border-color: grey; /* Couleur de la bordure pour l'onglet actif */
      }
         h3 {
           margin-top: 20px;
         }
// -------------------------Fin style pour afficher le code source----------------
         `,
})
export class ProductsnodeComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {
    nom: '',
    description: '',
    prix: 0,
    categorie_nom: '',
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }
  // fetchProducts() {
  //   this.productService.getProducts().subscribe((data) => {
  //     this.products = data;
  //   });
  // }
  
  fetchProducts() {
    this.productService.getProducts().pipe(
      map((data) => data.filter((dataProd) => dataProd.prix >= 500)) 
    ).subscribe((filteredProducts) => {
      this.products = filteredProducts;
    });
  }
  
 


  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe((value) => {
      console.log('value :', value);
      this.fetchProducts();
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.fetchProducts();
    });
  }

  // ----------------------ts pour afficher le code source--------------------
  infoTab1 = viewChild<ElementRef>('tab1');
  infoTab2 = viewChild<ElementRef>('tab2');
  infoTab3 = viewChild<ElementRef>('tab3');
  infoTab4 = viewChild<ElementRef>('tab4');
  infoTab5 = viewChild<ElementRef>('tab5');
  clicked: boolean = false;
  copy1() {
    const element = this.infoTab1()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  copy2() {
    const element = this.infoTab2()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  copy3() {
    const element = this.infoTab3()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  copy4() {
    const element = this.infoTab4()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  copy5() {
    const element = this.infoTab5()?.nativeElement;
    if (element) navigator.clipboard.writeText(element.textContent);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1500);
  }
  // ----------------------Fin ts pour afficher le code source--------------------
}
