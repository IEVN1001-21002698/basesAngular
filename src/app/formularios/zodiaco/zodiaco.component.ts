import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent {
  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    a_paterno: new FormControl('', Validators.required),
    a_materno: new FormControl('', Validators.required),
    dia: new FormControl('', Validators.required),
    mes: new FormControl('', Validators.required),
    a_o: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
  });

  signoZodiaco: string = '';
  edad: number = 0;
  imagenSignoZodiaco: string = '';
  nombre: string = '';

  imprimir(formulario: FormGroup) {
    const { nombre, a_paterno, a_materno, dia, mes, a_o, sexo } = formulario.value;
    this.nombre = `${nombre} ${a_paterno} ${a_materno}`;
    const fechaActual = new Date();
    const fechaNacimiento = new Date(a_o, mes - 1, dia);
    const diferencia = fechaActual.getTime() - fechaNacimiento.getTime();
    const edadEnMilisegundos = Math.abs(diferencia);
    const edadEnA_os = Math.floor(edadEnMilisegundos / (1000 * 60 * 60 * 24 * 365.25));
    this.edad = fechaActual.getFullYear() - a_o;
    if (fechaActual.getMonth() < mes - 1 || (fechaActual.getMonth() === mes - 1 && fechaActual.getDate() < dia)) {
      this.edad--;
    }
    this.signoZodiaco = this.getSignoZodiacoChino(a_o); 
    this.getImagenSignoZodiaco();
  }

  getSignoZodiacoChino(a_o: number): string {
    const signosChinos = ['rata', 'Buey', 'Tigre', 'Conejo', 'dragon', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'];
    const añoBase = 1924; 
    const diferencia = (a_o - añoBase) % 12; 
    return signosChinos[(diferencia + 12) % 12]; 
  }
  getImagenSignoZodiaco(): void {
    const imagenes: { [key: string]: string } = {
        rata: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudBhFZhcmLM2_lK6Hhl_z0PFFDTHnF9amfg&s',
        buey: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdd-CCmkfdGvQA0B3UXEKBIB2Pp4BhCk5ukg&s',
        tigre: 'https://www.themarkethink.com/wp-content/uploads/2023/09/tigre-tono.jpg',
        conejo: 'https://petsbioforestal.es/wp-content/uploads/2020/05/porque-mi-conejo-estornuda.jpg',
        dragon: 'https://s3.amazonaws.com/rtvc-assets-misenal.tv/ms-public/styles/convertir_webp/public/imagenes/ai-generated-8634660_1280.jpg.webp',
        serpiente: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uVetU6hA302SSU8pTot92Yb4Y_1a77Lusw&s',
        caballo: 'https://concepto.de/wp-content/uploads/2021/07/caballos-e1626738164508-800x400.jpg',
        cabra: 'https://www.petalatino.com/wp-content/uploads/Goats-maximili.jpg',
        mono: 'https://mitsloanreview.mx/wp-content/uploads/2023/12/dia-mundial-del-mono-lideres-mono.jpg',
        gallo: 'https://cocinemosjuntos.com.co/media/mageplaza/blog/post/t/i/tips-para-preparar-pollo-al-horno-jugoso-y-perfecto_1_.jpg',
        perro: 'https://unamglobal.unam.mx/wp-content/uploads/2023/03/estresperros.jpg',
        cerdo: 'https://cdn.eldeforma.com/wp-content/uploads/2019/08/2-policia-saludable.jpg',
    };
    this.imagenSignoZodiaco = imagenes[this.signoZodiaco.toLowerCase()];
}
}

