import { IDia } from "./IDia";
import { IUbicacion } from "./IUbicacion";
import { IUnidades } from "./IUnidades";

export interface IPrediccion {
    ubicacion: IUbicacion;
    dias: Array<IDia>;
    unidades: IUnidades;
}