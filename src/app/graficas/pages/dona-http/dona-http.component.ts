import { Component } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html'
})
export class DonaHttpComponent {

  constructor ( private graficasService: GraficasService){}

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSociales()
        .subscribe( data =>{

            

        });
  }




}
