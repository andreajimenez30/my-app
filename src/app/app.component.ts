import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [
    RouterModule,
    NavbarComponent 
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppComponent {
  title = 'mi-aplicacion-angular';
  // ...
}