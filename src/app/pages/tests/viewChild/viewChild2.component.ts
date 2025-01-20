import { ViewChild1Component } from './viewChild1.component';
import { Component, viewChild } from '@angular/core';
import { ViewChildEnfant2Component } from './viewChildEnfant2.component';

@Component({
  selector: 'app-viewChild1',
  standalone: true,
  imports: [ViewChildEnfant2Component], // Importation nécessaire pour inclure le composant enfant
  template: `
    <div class="container">
      <h1>viewChild: accéder à un composant enfant</h1>
      <hr />
      <div class="border p-3">
        <h3>Parent</h3>
        
        <button class="btn btn-secondary me-3" (click)="changeChildText()">
          Changer le texte de l'element de l'enfant
        </button><br><br>
        <button
          class="btn btn-secondary  me-3"
          (click)="changeStyleChildElmnt()"
        >
          Changer le style de l'element de l'enfant
        </button>
        <button class="btn btn-secondary" (click)="animElmntChild()">
          faire bouger l'element de l'enfant
        </button>
        <hr />
        <!-- Inclusion du composant enfant avec une référence -->
        <app-viewChildEnfant2 #child></app-viewChildEnfant2>

      </div>
      <div class=" mt-4">
        ****************************************<span class="fs-2">cours</span
        >*************************************************
      </div>
      <pre>

Vous pouvez aussi accéder à un composant enfant, ainsi à ses propriétés et ses méthodes et ses elements dom.

<span class="fw-bold">Dans le dom du parent:</span>
Pour cela il faut integrer le composant et le referencier avec un #:
<span class="text-danger fw-bold">&#60;app-enfant27 #child&#62;&#60;/app-enfant27&#62;</span>

<span class="fw-bold">Dans le ts du parent:</span>
<span class="text-danger fw-bold">childComponent = viewChild&#60;Enfant27Component&#62;('child');</span>
ou tout simplement:
<span class="text-danger fw-bold">childComponent = viewChild(Enfant27Component);</span>

<span class="fw-bold">Utilisation de l'element:</span>
childComponent est un signal, on l'utiliser avec des parenthèses: <span class="text-danger fw-bold">this.childComponent()</span>
</pre>
    </div>
  `,
})
export class ViewChild2Component {
  // Accès au composant enfant
  // childComponent = viewChild<Enfant27Component>('child');
  childComponent = viewChild(ViewChildEnfant2Component);
  compteur:number=0;

  

  // Changer le texte d'un élément dans le composant enfant
  changeChildText() {
    const child = this.childComponent();
    child?.changeText(
      '<span class="text-danger">Texte mis à jour depuis le parent !</span>'
    );
  }
  // Changer le style d'un élément dans le composant enfant
  changeStyleChildElmnt() {
    const child = this.childComponent();
    if (child) {
      const element = child.elementDiv.nativeElement; // Vérifie si l'élément DOM est accessible
      element.style.backgroundColor = 'lightblue';
      element.style.color = 'white';
      element.style.padding = '20px';
      element.style.border = '2px solid blue';
      element.style.borderRadius = '10px';
    }
  }
  //animer l'élément du child
  animElmntChild() {
    const child = this.childComponent();
    const element = child?.elementDiv.nativeElement; // Vérifie si l'élément DOM est accessible

    let position = 0; // Position initiale
    let direction = 1; // 1 pour aller à droite, -1 pour aller à gauche


    const animationInterval = setInterval(() => {
      // Modifie la position
      position += direction * 5; // Ajustez la vitesse en modifiant '5'

      // Met à jour la position horizontale avec `transform`
      element.style.transform = `translateX(${position}px)`;

      // Inverse la direction si les limites sont atteintes
      if (position >= 100 || position <= -100) {
        direction *= -1; // Change la direction
      }
    }, 30); // Intervalle de temps (30ms par itération)

    // Stoppe l'animation après un certain temps (facultatif)

    setTimeout(() => {
      clearInterval(animationInterval);
      element.style.transform = 'translateX(0)'; // Réinitialise à la position d'origine
    }, 5000); // Animation pendant 5 secondes
  }
}