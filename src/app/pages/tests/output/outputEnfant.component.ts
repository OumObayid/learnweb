import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-outputEnfant',
  imports: [FormsModule],
  template: `
  
      <input  class="form-control w-25"  type="text"  [(ngModel)]="textvalue" />
      <button (click)="sendMessage()" class="btn btn-primary w-25 my-3">
        envoie ce message à ton père
      </button><br>
      <button (click)="reinitialize()" class="btn btn-primary w-25 my-3">
        reinitialiser
      </button>
  `,
  styles: ``,
})
export class OutputEnfantComponent {
  textvalue: string = '';
  @Output() message = new EventEmitter<string>();

  sendMessage() {
    this.message.emit(this.textvalue);
  }
  reinitialize(){
    this.textvalue="";
  }
}
