import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
distanciaForm = new FormGroup({
    x1: new FormControl(''),
    y1: new FormControl(''),
    x2: new FormControl(''),
    y2: new FormControl(''),
  });

  distancia: number = 0;


  calcularDistancia() {
    const x1 = Number(this.distanciaForm.get('x1')?.value);
    const y1 = Number(this.distanciaForm.get('y1')?.value);
    const x2 = Number(this.distanciaForm.get('x2')?.value);
    const y2 = Number(this.distanciaForm.get('y2')?.value);

    this.distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }
}
  
