import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-class5',
  template: `
    <div class="container my-3">
        <h1> Combinaison de plusieurs approches de classe</h1>
        <hr>
      <div class="user-card" [class]="baseClasses" [class.active]="isActive">
        {{ user.name }}
      </div>
      <button class="btn btn-primary mt-3" (click)="toggleActive()">
        {{ isActive ? 'Deactivate User' : 'Activate User' }}
      </button>
    </div>
  `,
  styles: [
    `
      .user-card {
        padding: 20px;
        margin: 10px;
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
        background: #f9f9f9;
        transition: all 0.3s ease;
      }
      .user-card.active {
        background: #cce5ff;
        border-color: #007bff;
        box-shadow: 0px 4px 8px rgba(0, 123, 255, 0.4);
      }
      .btn {
        padding: 10px 20px;
        border-radius: 5px;
      }
    `,
  ],
})
export class Class5Component {
  @Input() user: { name: string } = { name: 'John Doe' }; // Données utilisateur
  baseClasses: string = 'user-card shadow';
  isActive: boolean = false; // État actif/inactif de l'utilisateur

  toggleActive(): void {
    this.isActive = !this.isActive; // Bascule l'état actif/inactif
  }
}
