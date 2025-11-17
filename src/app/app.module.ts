// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importa el módulo de rutas
import { AppRoutingModule } from './app-routing.module';

// Importa todos tus componentes
import { AppComponent } from './app.component'; 
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component'; 
import { PerfilComponent } from './pages/perfil/perfil.component'; 

@NgModule({
  declarations: [
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServiciosComponent,
    PerfilComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
