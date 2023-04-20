import { Component, OnInit, ViewChild } from '@angular/core';
 
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
 
@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
 
    public barChartOptions: ChartOptions = {
      responsive: true,
      scales: {
        x: {},
        y: {
          min: 10
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Graficos De Barra',
        },
       },
    };
 
 
    public barChartType: ChartType = 'bar';
 
  barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ],
  };
 
  constructor() { }
 
  ngOnInit(): void {
  }
 
  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];
      console.log(this.randomize)
      this.chart?.update();
  }
 
}