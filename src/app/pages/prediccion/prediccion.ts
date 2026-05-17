import { Component, OnInit } from '@angular/core';
import { OpenMeteoService } from '../../services/open-meteo-service';
import { IPrediccion } from '../../model/IPrediccion';
import { formatString } from '../../utils/string.utils';
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { IDia } from '../../model/IDia';

@Component({
  selector: 'page-prediccion',
  imports: [Footer, Header, NgClass],
  templateUrl: './prediccion.html',
  styleUrl: './prediccion.css',
})
export class Prediccion implements OnInit {

  localidad: String | null;
  dias: Number = 7

  prediccion!: IPrediccion;

  constructor(private route: ActivatedRoute, private openMeteoService: OpenMeteoService) {
    this.localidad = this.route.snapshot.paramMap.get('localidad');
    if (this.localidad === undefined || this.localidad === null) this.localidad = "Don Benito";

    this.dias = Number.parseInt(this.route.snapshot.paramMap.get('dias')!);
    if (this.dias === undefined || this.dias === null) this.dias = 7;    
  }

  ngOnInit(): void {
    this.obtenerPrediccion();
  }

  obtenerPrediccion(): void {
    this.localidad = formatString(this.localidad!);
    this.openMeteoService.obtenerPrediccion(this.localidad, this.dias).subscribe((data) => {
      this.prediccion = data
    });
  }

  obtenerTextoBadgeEstado(dia: IDia): String {
    switch (dia.estado) {
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

  obtenerTipoBadgeEstado(dia: IDia) {
    switch (dia.estado) {
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

  obtenerImagenEstado(dia: IDia): String {
    switch (dia.estado) {
      case "soleado":
      case "mayormente_soleado":
        return "/estado/sol.png"
        
      case "parcialmente_nublado":
        return "/estado/parcialmente_nublado.png"

      case "niebla":
        return "/estado/nublado.png";
      case "nublado":
        return "/estado/nublado.png"

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
