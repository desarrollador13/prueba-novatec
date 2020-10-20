import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleOfertaComponent } from './componentes/detalle-oferta/detalle-oferta.component';
import { BusquedaOfertaComponent } from './componentes/busqueda-oferta/busqueda-oferta.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleOfertaComponent,
    BusquedaOfertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
