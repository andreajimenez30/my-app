import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component'; // 👈 1. IMPORTAR

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  standalone: true, // Si es standalone, debe tener esto
  imports: [
    NavbarComponent // 👈 2. AÑADIR A IMPORTS
  ]
})
export class ServiciosComponent {
  // ...
}