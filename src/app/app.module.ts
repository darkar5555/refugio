import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import de angular material
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatTableModule
} from '@angular/material'

import 'hammerjs';

//imports componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PerrosperdidosComponent } from './perrosperdidos/perrosperdidos.component';
import { AdoptaComponent } from './adopta/adopta.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { DonacionesComponent } from './donaciones/donaciones.component';
import { HomeComponent } from './home/home.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { DetallePerroComponent } from './detalle-perro/detalle-perro.component';

//import de ngx bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';

//import de services
import { ImageService } from './services/image.service';

//import google maps para ubicacion
import { AgmCoreModule } from '@agm/core';


const appRoutes : Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"adopta",
    component: AdoptaComponent
  },
  {
    path:"conocenos",
    component: ConocenosComponent
  },
  {
    path:"donaciones",
    component: DonacionesComponent
  },
  {
    path:"perrosperdidos",
    component: PerrosperdidosComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "navbar",
    component: NavbarComponent
  },
  {
    path: "detalle-perro/:id",
    component: DetallePerroComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    PerrosperdidosComponent,
    AdoptaComponent,
    ConocenosComponent,
    DonacionesComponent,
    HomeComponent,
    SugerenciasComponent,
    DetallePerroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCv2lru_Ce43qRHTs-BFH-cbISXZjTOCwQ'
    })
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
