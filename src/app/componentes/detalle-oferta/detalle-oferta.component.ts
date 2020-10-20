import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-oferta',
  templateUrl: './detalle-oferta.component.html',
  styleUrls: ['./detalle-oferta.component.css']
})
export class DetalleOfertaComponent implements OnInit {

	@Input() descriptChild:any|string
	public dataCaracter:any[] = []
	public dataCaracterName:any[] = []
	public dataprecios:any|string = []
  constructor() { }

  ngOnInit() {
  	this.dataCaracter = this.descriptChild.versions[0].characteristics[0].versions[0].characteristicValues 
  	this.dataCaracterName = this.descriptChild.versions[0].characteristics //[0].versions
  	this.dataprecios = this.descriptChild.versions[0].productOfferingPrices
  	console.log('pppppppppppppppppppppppppppp',this.dataprecios)
  }

}
