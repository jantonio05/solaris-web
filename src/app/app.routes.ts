import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Hoy } from './pages/hoy/hoy';
import { Prediccion } from './pages/prediccion/prediccion';

export const routes: Routes = [
    {path:'', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: Inicio},
    {path: 'hoy/:localidad', component: Hoy},
    {path: 'prediccion/:localidad/:dias', component: Prediccion},
    {path: '**', redirectTo: 'inicio'}
];
