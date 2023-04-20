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
 
  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100), 
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100 )];
    // Only Change 3 values
    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100) ];
      console.log(this.randomize)
    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)];
      console.log(this.randomize)
      this.chart?.update();

      
  }
 
}