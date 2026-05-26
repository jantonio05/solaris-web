import { Component, Input, OnInit } from '@angular/core';
import { ITiempoHoy } from '../../model/ITiempoHoy';
import { OpenMeteoService } from '../../services/open-meteo-service';
import { ActivatedRoute } from '@angular/router';
import { formatString } from '../../utils/string.utils';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { TarjetaHoy } from "../../components/tarjeta-hoy/tarjeta-hoy";

@Component({
  selector: 'app-hoy',
  imports: [Header, Footer, TarjetaHoy],
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

  estaCargando: Boolean = true;

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
      this.tiempoHoy = data;
      if (this.tiempoHoy != undefined) {
        this.estaCargando = false;
      }      
    });
  }

}
