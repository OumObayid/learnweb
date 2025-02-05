import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Component, OnInit, signal } from '@angular/core';
import { removeActiveUser, selectIsLoggedIn } from '../../ngrx/data.slice';
@Component({
  standalone: true,
  imports: [RouterLink, CommonModule],
  selector: 'app-header',
  templateUrl:'header.component.html',
  styles: [
    `
      a,
      .logout {
        text-decoration: none; /* Supprime le soulignement */
        background-color:rgb(22, 45, 50); /* Couleur de fond par défaut */
        color: white; /* Couleur du texte */
        padding: 5px; /* Espacement interne pour un aspect bouton */
        border-radius: 5px; /* Coins arrondis */
        display: inline-block; /* S'assure que les liens respectent le padding */
        transition: background-color 0.3s ease; /* Transition fluide sur le survol */
      }

      a:hover,
      .logout:hover {
        background-color:rgb(199, 204, 46); /* Couleur de fond au survol */
      }

      .active {
        color: rgb(183, 85, 85) !important; /* Couleur du texte actif */
        font-weight: 600 !important;
      }
    `,
  ],
})

export class HeaderComponent implements OnInit {
  constructor(public router: Router, private store: Store) {}
  isloggedIn = signal(false);
  ngOnInit() {
    this.store
      .select(selectIsLoggedIn)
      .subscribe((islog) => this.isloggedIn.set(islog));
  }
  logout() {
    this.isloggedIn.set(false);
    this.store.dispatch(removeActiveUser());
    this.router.navigate(['/login']);
  }
}
