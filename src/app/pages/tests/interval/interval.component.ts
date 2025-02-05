import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-input',
  imports: [],
  template: `
  <div class="container">
      <h1>l'observable interval()</h1>
      <hr />
      <button class="btn btn-primary" (click)="startTimer()">Démarrer</button>
      <button class="btn btn-danger mx-4" (click)="stopTimer()">Arrêter</button>
      <button class="btn btn-success" (click)="resetTimer()">
        Réinitialiser
      </button>
      <div class="my-3 fs-5  ">
        Minuterie: <span class="text-danger">{{ time }}</span>
      </div>
  `,
  styles: ``,
})
export class IntervalComponent {

  time: number = 0; // Valeur actuelle du temps
  private timerSubscription: Subscription | null = null; // Subscription de l'intervalle
  private isRunning: boolean = false; // Indique si la minuterie est active

  startTimer() {
    if (this.isRunning) return; // Empêche plusieurs démarrages simultanés

    const timer$ = interval(500); // Observable qui émet toutes les 100ms
    this.timerSubscription = timer$.subscribe(() => {
      this.time++;
    });
   
    this.isRunning = true; // Indique que la minuterie est en cours d'exécution
  }

  stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe(); // Arrête l'observable
      this.timerSubscription = null;
      this.isRunning = false; // Marque comme arrêté
    }
  }

  resetTimer() {
    this.stopTimer(); // Arrête la minuterie si elle est active
    this.time = 0; // Réinitialise le temps
  }

//   let count=0;
// const timer= setInterval(()=>{
//     console.log(count);
//     count++;
// },1000);

// setTimeout(()=>{
//     clearInterval(timer);
// },10000)
}
