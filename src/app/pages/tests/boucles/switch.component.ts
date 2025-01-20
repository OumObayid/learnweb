import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-switch',
  standalone: true,
  template: `
  <div class="container m-5">
    <h2>Liste des utilisateurs</h2>
    <hr>
    @switch (userRole) {
      @case ('admin') {
        <div class="admin-panel">
          <h3>Panneau Administrateur</h3>
          <p>Accès complet au système</p>
        </div>
      }
      @case ('manager') {
        <div class="manager-panel">
          <h3>Panneau Manager</h3>
          <p>Accès à la gestion d'équipe</p>
        </div>
      }
      @default {
        <div class="user-panel">
          <h3>Panneau Utilisateur</h3>
          <p>Accès limité</p>
        </div>
      }
    }
    </div>
  `
})
export class SwitchComponent {
  users: User[] = [
    { id: 1, firstName: 'Alice', lastName:'aline' , email: 'alice@example.com' },
    { id: 2, firstName: 'Bob', lastName:'boby' , email: 'bob@example.com' },
    { id: 3, firstName: 'Charlie', lastName:'chary' , email: 'charlie@example.com' }
  ];
  userRole: string = 'admin';
}