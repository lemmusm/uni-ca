import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Lazy load images
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
// Http
import { HttpClientModule } from '@angular/common/http';
// AngularMaps
import { AgmCoreModule } from '@agm/core';
// Routing
import { AppRoutingModule } from './app-routing.module';
// VideoPlayer
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
// import { SingleMediaPlayer } from './single-media-player';
// Modules
import { AppComponent } from './app.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TestimonialComponent } from './components/shared/testimonial/testimonial.component';
import { InstalacionesComponent } from './components/pages/instalaciones/instalaciones.component';
import { InfoPacientesComponent } from './components/pages/info-pacientes/info-pacientes.component';
import { ClinicaComponent } from './components/pages/clinica/clinica.component';
import { FarmacosArticulosComponent } from './components/pages/farmacos-articulos/farmacos-articulos.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    TestimonialComponent,
    InstalacionesComponent,
    InfoPacientesComponent,
    ClinicaComponent,
    FarmacosArticulosComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9oIqArqOp5NP4_EMNqWkQcQUukVvY0qE'
    }),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    LazyLoadImagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
