import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 1. Importa todos los componentes de página que creaste
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component'; 
import { PerfilComponent } from './pages/perfil/perfil.component'; 

const routes: Routes = [
  // Ruta por defecto (la página de inicio)
  { path: '', component: HomeComponent },
  
  // Ruta para la página de servicios
  { path: 'servicios', component: ServiciosComponent },
  
  // Ruta para la página de perfil / nosotros
  { path: 'perfil', component: PerfilComponent },
  
  // Ruta comodín: redirige cualquier URL no reconocida a la página de inicio
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }