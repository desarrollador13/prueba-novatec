import { Component, ViewChild } from '@angular/core';
import { OfertaServicioService } from './servicio/oferta-servicio.service'
import { BusquedaOfertaComponent } from "./componentes/busqueda-oferta/busqueda-oferta.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Novatec';
  public ofertas:any[] = []
  public dataParent:any[] = []
  descripParent:string|any = ''
  deatalleView:boolean = false

  constructor(private ofertaServicioService:OfertaServicioService) { }

  ngOnInit() {
  	this.ofertas= this.ofertaServicioService.getOfertas()
  	this.dataParent = this.ofertas
  }

  dataFilterBusqueda(value:string|any) {
  	this.deatalleView = false
  	for(let x=0; x < this.ofertas.length; x++ ) {
  		this.descripParent = this.ofertas.find(f => f.id == value) //console.log(f.id,'oooooossosoososoos') f[0].id == value
  	}
  	setTimeout(() => {
  		this.deatalleView = true
  	},300)
  }

}
