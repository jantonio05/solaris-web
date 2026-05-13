import { Component, Input, OnInit } from '@angular/core';
import { ITiempoHoy } from '../../model/ITiempoHoy';
import { OpenMeteoService } from '../../services/open-meteo-service';
import { ActivatedRoute } from '@angular/router';
import { formatString } from '../../utils/string.utils';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-hoy',
  imports: [Header, Footer, NgClass],
  templateUrl: './hoy.html',
  styleUrl: './hoy.css',
})
export class Hoy implements OnInit {
  /**
   * Representa la localidad de la cual se obtendrá el tiempo de hoy
   * Por defecto: Don Benito
   */
  localidad: String | null;

  /**
   * Representa la información obtenida de la localidad
   */
  tiempoHoy!: ITiempoHoy;

  constructor(private route: ActivatedRoute, private openMeteoService: OpenMeteoService) {
    this.localidad = this.route.snapshot.paramMap.get('localidad');
    if (this.localidad === undefined || this.localidad === null) this.localidad = "Don Benito";
   }

  ngOnInit(): void {
    this.obtenerTiempoDeHoy();
  }

  obtenerTiempoDeHoy(): void {
    this.localidad = formatString(this.localidad!);
    this.openMeteoService.obtenerTiempoHoy(this.localidad!).subscribe((data) => {
      this.tiempoHoy = data
    });
  }

  obtenerBadgeEstado(): String {
    switch (this.tiempoHoy.estado) {
      case "soleado":
        return "Soleado"
      case "mayormente_soleado":
        return "Mayormente soleado"
      case "parcialmente_nublado":
        return "Parcialmente nublado"
      case "niebla":
        return "Niebla"
      case "nublado":
        return "Nublado"
      case "llovizna":
        return "Llovizna"
      case "lluvia":
        return "Lluvia"
      case "chubascos":
        return "Chubascos"
      case "tormenta":
        return "Tormenta"
      case "nieve":
        return "Nieve"
      case "desconocido":
        return "Desconocido"
      default:
        return "Ninguno";
    }
  }

  obtenerTipoBadgeEstado() {
    switch (this.tiempoHoy.estado) {
      case "soleado":
      case "mayormente_soleado":
        return `badge-primary`
        
      case "parcialmente_nublado":
      case "niebla":
      case "llovizna":
      case "lluvia":
      case "chubascos":
      case "tormenta":
      case "nieve":
      case "nublado":
        return `badge-secondary`;

      case "desconocido":
        return `badge-info`;

      default:
        return `badge-error`;
    }
  }

  obtenerImagenEstado(): String {
    switch (this.tiempoHoy.estado) {
      case "soleado":
      case "mayormente_soleado":
        return "/estado/sol.png"
        
      case "parcialmente_nublado":
        return "/estado/parcialmente_nublado.png"
      case "niebla":
      case "nublado":
        return "/estado/nublado.png";

      case "llovizna":
      case "chubascos":
        return "/estado/llovizna.png"
      case "lluvia":
        return "/estado/lluvia.png"
      case "tormenta":
        return "/estado/tormenta.png";

      case "nieve":
        return "/estado/nieve.png";

      case "desconocido":
        return "/estado/error.png";

      default:
        return "/estado/error.png";
    }
  }

}
