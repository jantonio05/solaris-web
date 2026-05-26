import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'page-inicio',
  imports: [Header, Footer, FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  municipio: string = '';
  accion: string = '';

  constructor(private router: Router) {}

  buscar(): void {
    const localidad = this.municipio.trim();
    if (!localidad || !this.accion) return;

    if (this.accion === 'hoy') {
      this.router.navigate(['/hoy', localidad]);
    } else if (this.accion === 'prediccion') {
      this.router.navigate(['/prediccion', localidad, 7]);
    }
  }
}
