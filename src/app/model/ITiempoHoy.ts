import { Estado } from "./Estado";
import { IUbicacion } from "./IUbicacion";
import { IUnidades } from "./IUnidades";
import { IViento } from "./IVIento";

export interface ITiempoHoy {
    ubicacion: IUbicacion;
    temperaturaActual: Number;
    temperaturaMaxima: Number;
    temperaturaMinima: Number;
    humedad: Number;
    lluvia: Number;
    viento: IViento;
    estado: Estado;
    unidades: IUnidades;
}