import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse', // Nom du pipe utilisé dans le template
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return ''; // Si la valeur est vide, renvoyer une chaîne vide
    return value.split('').reverse().join('');
  }
}
