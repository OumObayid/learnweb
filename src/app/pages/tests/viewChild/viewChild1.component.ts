import { Component, ElementRef, viewChild } from '@angular/core';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-viewChild1',
  imports: [],
  template: `
    <div class="container my-5">
      <h1>viewChild: accéder à un composant enfant</h1>
      <hr />
      <div #userInfo>
        <p>aucune information</p>
      </div>
      <button class="btn btn-info " (click)="afficheNom()">
        Afficher son nom
      </button>
      <button class="btn btn-success mx-5 " (click)="afficheEmail()">
        Afficher son email
      </button>
      <button class="btn btn-danger" (click)="reinitialiser()">
        Réinitialiser
      </button>
    </div>
  `,
  styles: ``,
})
export class ViewChild1Component {
  user: User = {
    id: 1,
    firstName: 'Alice',
    lastName: 'aline',
    email: 'alice@example.com',
  };

  // @ViewChild('userInfo') infoElement!: ElementRef;
  // et pour l'utiliser on l'utilise sans ():this.infoElement

  userInfoElmt = viewChild<ElementRef<HTMLElement>>('userInfo');

  afficheNom() {
    const elmt = this.userInfoElmt();
    if (elmt) {
      elmt.nativeElement.textContent = this.user.firstName;
      elmt.nativeElement.style.backgroundColor = 'red';
      elmt.nativeElement.style.color = 'white';
    }
  }
  afficheEmail() {
    const elmt = this.userInfoElmt();
    if (elmt) {
      elmt.nativeElement.textContent = this.user.email;
      elmt.nativeElement.style.backgroundColor = 'yellow';
      elmt.nativeElement.style.color = 'black';
    }
  }
  reinitialiser() {
    const elmt = this.userInfoElmt();
    if (elmt) {
      elmt.nativeElement.textContent = 'aucune information';
      elmt.nativeElement.style.backgroundColor = '';
      elmt.nativeElement.style.color = '';
    }
  }
}
