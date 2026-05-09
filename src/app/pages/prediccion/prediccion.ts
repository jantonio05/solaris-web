import { Component, OnInit } from '@angular/core';
import { OpenMeteoService } from '../../services/open-meteo-service';
import { IPrediccion } from '../../model/IPrediccion';
import { formatString } from '../../utils/string.utils';
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-prediccion',
  imports: [Footer, Header],
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
    this.openMeteoService.obtenerPrediccion(this.localidad, this.dias).subscribe((data) => this.prediccion = data);
  }

}
