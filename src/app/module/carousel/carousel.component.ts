import { Component, Input } from '@angular/core';

interface carruselImagenes {
  imagenSrc: string;
  imagenAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() imagenes: carruselImagenes[] = [];
  @Input() indicatores = true;
  @Input() controles = true;
  @Input() deslizanteAutomatico = false;
  @Input() deslizanteIntervalo = 3000;

  ngOnInit(): void {
    if (this.deslizanteAutomatico) {
      this.AutomaticoDeslizanteImagenes();
    }
  }

  AutomaticoDeslizanteImagenes(): void {
    setInterval(() => {
      this.cambiarImagenAtras();
    }, this.deslizanteIntervalo);
  }

  public seleccionarIndex: number = 0;

  seleccionarImagen(index: number): void {
    this.seleccionarIndex = index;
  }

  cambiarImagenAdelante(): void {
    if (this.seleccionarIndex === 0) {
      this.seleccionarIndex = this.imagenes.length - 1;
    } else {
      this.seleccionarIndex--;
    }
  }

  cambiarImagenAtras(): void {
    if (this.seleccionarIndex === this.imagenes.length - 1) {
      this.seleccionarIndex = 0;
    } else {
      this.seleccionarIndex++;
    }
  }
}
