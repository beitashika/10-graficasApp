import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
 
@Component({
    selector: 'app-barras-doble',
    templateUrl: './barras-dobles.component.html',
})
export class BarrasDoblesComponent {
    labelsData: string[] = ['2021', '2022', '2023', '2024', '2025'];
    
    proveedoresData: ChartData<'bar'> = {
        labels: this.labelsData,
        datasets:[
            { data: [100, 200, 300, 400, 500], label: 'Vendedor A' },
            { data: [50, 250, 30, 450, 200], label: 'Vendedor B' }
        ]
    };
 
    productoData: ChartData<'bar'> = {
        labels: this.labelsData,
        datasets:[
            { data: [200, 300, 400, 300, 100], label: 'Carros', backgroundColor: 'blue' }
        ]
    };
 
}