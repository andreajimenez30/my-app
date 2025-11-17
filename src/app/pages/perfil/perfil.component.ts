import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component'; // 👈 1. IMPORTAR

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  standalone: true, // Si es standalone, debe tener esto
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    NavbarComponent // 👈 2. AÑADIR A IMPORTS
  ]
})
export class PerfilComponent {
  // ...
}