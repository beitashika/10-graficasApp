import { Component } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html'
})
export class DonaHttpComponent {
  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#6405F0', '#0724E3', '#05A0F0'] //Ya no es un arreglo de Color
      },
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';
  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSociales()
      .subscribe(data => {

        this.doughnutChartData={
          labels:Object.keys(data),
          datasets:[{data:Object.values(data)}]
        }
       
      });
  }




}
