import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {


  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: "#F2BB30", hoverBackgroundColor: "red"  },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: "#FCAF32", hoverBackgroundColor: "red" },
    { data: [8, 50, 20, 12, 85, 55, 71], label: 'Series C' , backgroundColor: "#E68D39", hoverBackgroundColor: "red" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];

      this.barChartData[1].data = [
        Math.round(Math.random() * 100),
        59,
        80,
        (Math.random() * 100),
        56,
        (Math.random() * 100),
        40 ];

        this.barChartData[2].data = [
          Math.round( Math.random() * 100 ),
          Math.round( Math.random() * 100 ),
          Math.round( Math.random() * 100 ),
          Math.round( Math.random() * 100 ),
          Math.round( Math.random() * 100 ),
          Math.round( Math.random() * 100 ),
          Math.round( Math.random() * 100 ),
          Math.round( Math.random() * 100 )
        ];


  }


}
