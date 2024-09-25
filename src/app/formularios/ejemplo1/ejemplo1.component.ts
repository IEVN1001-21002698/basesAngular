import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.css'
})
export class Ejemplo1Component implements OnInit {
  formulario!:FormGroup;
  resultado:number=0;
  constructor() { }
  ngOnInit(): void {
      this.formulario = new FormGroup({
        numero1: new FormControl('', Validators.required),
        numero2: new FormControl('', Validators.required)
      });
  }
  sumarNumeros(): void {
   const numero1 = this.formulario.get('numero1')?.value;
   const numero2 = this.formulario.get('numero2')?.value;
   this.resultado = numero1 + numero2;
  }
}
