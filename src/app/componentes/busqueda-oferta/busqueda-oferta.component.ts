import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OfertaServicioService } from '../../servicio/oferta-servicio.service'

@Component({
  selector: 'app-busqueda-oferta',
  templateUrl: './busqueda-oferta.component.html',
  styleUrls: ['./busqueda-oferta.component.css']
})
export class BusquedaOfertaComponent implements OnInit {
	
	public ofertas:any = []
	public id_oferta:any|string = '' 
  public nombre_oferta:any|string = ''
  private valoresData:any 
	@Input() dataChild: string
	@Output() idOfertaEvent = new EventEmitter<string>()
  public valorName:any = 'Sin Selección....'
  constructor(private ofertaServicioService:OfertaServicioService) { }

  ngOnInit() {
  	// this.ofertas= this.ofertaServicioService.getOfertas()
  	// console.log(this.ofertas,'ofertas- dataChilddataChild->>>')
  }

  dataSeleccionada(value:string|any) {
    this.id_oferta = ''
    this.id_oferta = value
    this.ofertas = this.dataChild
    for(let x=0; x < this.ofertas.length; x++ ) {
      this.valoresData = this.ofertas.find(f => f.id == value) //console.log(f.id,'oooooossosoososoos') f[0].id == value
    }
    
    this.valorName = this.valoresData.versions[0].name 
  	this.idOfertaEvent.emit(value)
  }

  dataSeleccionadas(value:string|any) {
    this.idOfertaEvent.emit(this.id_oferta)
  }

}
