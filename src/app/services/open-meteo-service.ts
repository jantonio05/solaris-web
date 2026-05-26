import { Injectable } from '@angular/core';
import { ITiempoHoy } from '../model/ITiempoHoy';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPrediccion } from '../model/IPrediccion';

@Injectable({
  providedIn: 'root',
})
export class OpenMeteoService {
  API_URL: String = 'http://localhost:3000/tiempo';

  constructor(private http: HttpClient) {}

  obtenerTiempoHoy(localidad: String): Observable<ITiempoHoy> {
    return this.http.get<ITiempoHoy>(`${this.API_URL}/hoy/${localidad}`);
  }

  obtenerPrediccion(localidad: String, dias: Number): Observable<IPrediccion> {
    return this.http.get<IPrediccion>(`${this.API_URL}/proximos/${localidad}/${dias}`);
  }
}
