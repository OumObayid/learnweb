import { Component, QueryList, ElementRef, viewChildren } from '@angular/core';

@Component({
  selector: 'app-view-children1',
  template: `
    <div class="container my-5">
      <h1>&#64;ViewChildren: Accéder à plusieurs éléments d'un composant</h1>
      <hr />
      <p #paragraph>Premier paragraphe</p>
      <p #paragraph>Deuxième paragraphe</p>
      <p #paragraph>Troisième paragraphe</p>
      <button class="btn btn-primary mt-3" (click)="highlightParagraphs()">
        Afficher les paragraphes
      </button>
      <button class="btn btn-danger mt-3 ms-2" (click)="resetStyles()">
        Réinitialiser
      </button>
    </div>
  `,
  styles: [],
})
export class ViewChildren1Component {
  // Utilisation de @ViewChildren pour récupérer plusieurs éléments référencés par #paragraph
  // @ViewChildren('paragraph') paragraphs!: QueryList<ElementRef>;
  paragraphs = viewChildren<ElementRef>('paragraph');
  /**
   * Met en surbrillance tous les paragraphes.
   */
  /**
   * Met en surbrillance les paragraphes avec des couleurs fixes : jaune, vert, rouge.
   */
  highlightParagraphs() {
    const colors = ['yellow', 'grey', 'green']; // Les couleurs fixes
    let i = 0; // Compteur manuel pour parcourir le tableau des couleurs

     this.paragraphs().forEach(p => {
        const element = p.nativeElement;
        element.style.backgroundColor = colors[i]; // Applique la couleur
        element.style.color = '#fff'; // Couleur du texte
        element.style.fontWeight = 'bold'; // Texte en gras
        i = (i + 1) % colors.length; // Incrémente et revient au début des couleurs si nécessaire
      
     });
  }

  /**
   * Réinitialise le style des paragraphes.
   */
  resetStyles() {
    this.paragraphs().forEach((p) => {
      const element = p.nativeElement;
      element.style.backgroundColor = '';
      element.style.color = '';
      element.style.fontWeight = '';
    });
  }
}
