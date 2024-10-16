import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  public anio = new Date();
  public fechaActual: number = this.anio.getFullYear();
  public email: string = 'manualidades.mbd@hotmail.com';
}
