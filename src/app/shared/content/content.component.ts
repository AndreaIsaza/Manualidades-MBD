import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  imagenes = [
    { imagenSrc: './assets/img/munecos/1.png', imagenAlt: 'Muñeco uno' },
    { imagenSrc: './assets/img/munecos/2.png', imagenAlt: 'Muñeco dos' },
    { imagenSrc: './assets/img/munecos/3.png', imagenAlt: 'Muñeco tres' },
    { imagenSrc: './assets/img/munecos/4.png', imagenAlt: 'Muñeco cuatro' },
  ];
}
