import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { InstalacionesComponent } from './components/pages/instalaciones/instalaciones.component';
import { InfoPacientesComponent } from './components/pages/info-pacientes/info-pacientes.component';
import { ClinicaComponent } from './components/pages/clinica/clinica.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { FarmacosArticulosComponent } from './components/pages/farmacos-articulos/farmacos-articulos.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'instalaciones',
    component: InstalacionesComponent
  },
  {
    path: 'info-pacientes',
    component: InfoPacientesComponent
  },
  {
    path: 'clinica',
    component: ClinicaComponent
  },
  {
    path: 'farmacos-articulos',
    component: FarmacosArticulosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
