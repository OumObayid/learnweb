import { Component } from '@angular/core';
// Explicitly import NgFor directive

@Component({
  selector: 'app-boucles',
  standalone: true, // This is a standalone component
  imports: [], // Import NgFor directive to enable *ngFor usage
  template: `
    <div class="container mt-5">
      <h1>Liste des étudiants et leur validation</h1>
      <ul>
        @for (student of students; track student) {
        <li>{{ student.name }} - {{ getValidationMessage(student.grade) }}</li>
        }
      </ul>
    </div>
  `,
  styles: [
    `
      .container {
        font-family: Arial, sans-serif;
        padding: 16px;
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        margin-bottom: 8px;
      }
    `,
  ],
})
export class BouclesComponent {
  // Liste des étudiants avec leurs notes
  students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 45 },
    { name: 'Charlie', grade: 60 },
    { name: 'Diana', grade: 72 },
  ];

  /**
   * Fonction qui renvoie un message en fonction de la note.
   */
  getValidationMessage(grade: number): string {
    let message = '';

    // Utilisation de switch et de AND (&&)
    switch (true) {
      case grade >= 80 && grade <= 100:
        message = 'Excellent';
        break;
      case grade >= 60 && grade < 80:
        message = 'Passable';
        break;
      case grade >= 40 && grade < 60:
        message = 'Rattrapage';
        break;
      default:
        message = 'Échec';
        break;
    }

    return message;
  }
}
