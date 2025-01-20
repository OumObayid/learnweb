
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal1',
  imports: [FormsModule],
  template: `
    <div class="container mt-5">
      <h1>Signal and computed</h1>
      <label class="me-2">prix</label>

      <input class="me-4" type="text" [(ngModel)]="prix" placeholder="prix" />
      <label class="me-2">quantité</label>

      <input type="text" [(ngModel)]="quantity" placeholder="quantity" class="me-4" />
      <label class="mb-4">Le totale est: {{ total() }}</label>
      

      @if (stockState()=="") {
      <div >Stock : {{ stock() }}</div>

      } @else if (stockState()=="insuffisant") {
      <div>Stock : <span class="text-danger">{{stock()}}</span> </div>
      }
 
       @else {
      <div>Stock : {{stock()}} <span class="text-danger">{{ stockState() }}</span></div>
      }

      <br />
      <button class="btn btn-info my-4  me-4 w-25 text-white" (click)="paid()">payer</button>
      <button class="btn btn-info my-4 w-25 text-white" (click)="clear()">
        réinitialiser
      </button>
    </div>
  `,
  styles: ``,
})
export class Signal1Component {
  constructor() {
    effect(() => {
      if (this.stock() == 0) this.stockState.set('épuisé');
      else if (this.stock() < 100) this.stockState.set('insuffisant');
    });
  }
  prix = signal(100);
  quantity = signal(1);
  total = computed(() => this.prix() * this.quantity());
  stock = signal(1000);
  disponible = signal(true);
  stockState = signal('');
  paid() {
    if (this.stock() >= this.quantity()) {
      this.stock.update((currentStock) => currentStock - this.quantity());
      this.clear();
    } else if(this.stock()!==0)  alert('quantité insuffisant');
      else alert('quantité épuisé');
  }
  clear() {
    this.prix.set(100);
    this.quantity.set(1);
  }
}
