import { Component } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImagenes: boolean = true;

  mostarImagen(): void {
    this.muestraImagenes = !this.muestraImagenes;
  }
    productos: any[] = [
        {
            "productoId": 1,
            "modelo": "sentra",
            "descripcion": "5 puertas",
            "year": "marzo 12 2021",
            "precio": 120000,
            "marca": "nisan",
            "color": "blanco",
            "imgUrl": "https://media.revistagq.com/photos/5d89c9335d07090008d92dd6/16:9/w_2560%2Cc_limit/2020-mclaren-senna-mmp-1545234547.jpg"
        
        },
        {
            "productoId": 2,
            "modelo": "a4",
            "descripcion": "4 puertas",
            "year": "marzo 12 2021",
            "precio": 130000,
            "marca": "volsvagen",
            "color": "negro",
            "imgUrl": "https://www.lavanguardia.com/files/image_449_220/uploads/2022/09/19/632843ea2ef3e.png"
        
        },
        {
            "productoId": 3,
            "modelo": "a5",
            "descripcion": "2 puertas",
            "year": "marzo 12 2021",
            "precio": 150000,
            "marca": "chevrolet",
            "color": "rojo",
            "imgUrl": "https://www.elsoldeleon.com.mx/local/wrfub9-coches-5.jpg/ALTERNATES/LANDSCAPE_1140/COCHES%20(5).JPG"
        
        },
        
    ]
  }