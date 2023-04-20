import { Component, OnInit, ViewChild } from '@angular/core';
 
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
 

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html'
 
})
export class GraficaBarraComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
 
  public barChartOptions: ChartOptions = {
    responsive: true,
   
  };


  public barChartType: ChartType = 'bar';

barChartData: ChartData<'bar'> = {
  labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
  datasets: [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor:'red' },
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#f763C4', hoverBackgroundColor:'red' },
    { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Series C' , backgroundColor: '#D665E0', hoverBackgroundColor:'red'}
  ],
};

constructor() { }

ngOnInit(): void {
}


}