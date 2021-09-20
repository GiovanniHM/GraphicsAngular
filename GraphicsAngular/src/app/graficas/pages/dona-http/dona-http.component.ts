import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100],
    // [50, 150, 120],
    // [250, 130, 70],
  ];

  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficaService: GraficasService) { }

  ngOnInit(): void {
    this.graficaService.getUserSocialMediaDataGrafic()
    .subscribe( ({labels, values}) => {
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);

    })

  }

}
