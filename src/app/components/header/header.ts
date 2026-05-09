import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'solaris-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  busqueda!: String;

  onKeyDown(event: KeyboardEvent): void {
    if (event.key != 'Enter') return;
    
    // Obtener el texto
    // Cortar por los dos puntos ':'
    // Si antes de los dos puntos hay una 'h'
      // Navegamos hasta /hoy/localidad-a-buscar
    // ElseIf Tiene una 'p'
      // Navegamos hasta /hoy/localidad-a-buscar/dias[en el caso de que no haya días, por defecto 7]
    // Else 
      // Return
  }

}
