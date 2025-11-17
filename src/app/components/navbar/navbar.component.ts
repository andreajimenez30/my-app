import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar', // Este es el nombre <app-navbar> que usamos
  standalone: true,
  imports: [RouterModule], // Si usas Standalone Components, importa RouterModule aquí
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // No necesitas añadir nada aquí dentro.
  // La navegación la maneja 'routerLink' en el HTML.

  constructor() { }

}