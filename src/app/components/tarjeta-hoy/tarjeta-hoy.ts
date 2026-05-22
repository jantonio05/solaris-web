import { Component, Input } from '@angular/core';
import { ITiempoHoy } from '../../model/ITiempoHoy';
import { NgClass } from '@angular/common';

@Component({
  selector: 'tarjeta-hoy',
  imports: [NgClass],
  templateUrl: './tarjeta-hoy.html',
  styleUrl: './tarjeta-hoy.css',
})
export class TarjetaHoy {
  @Input()
  hoy!: ITiempoHoy;
  
   obtenerBadgeEstado(): String {
    switch (this.hoy.estado) {
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
    switch (this.hoy.estado) {
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
    switch (this.hoy.estado) {
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
