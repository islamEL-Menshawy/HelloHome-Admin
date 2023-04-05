import { Component, OnInit } from '@angular/core'
import {StatisticsService} from "./statistics.service";
import { colors } from 'app/colors.const';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {ChartOptions, ChartType} from "chart.js";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public statistics:any= {};

  // Color Variables
  private primaryColorShade = '#836AF9';
  private yellowColor = '#ffe800';
  private successColorShade = '#28dac6';
  private warningColorShade = '#ffe802';
  private warningLightColor = '#FDAC34';
  private infoColorShade = '#299AFF';
  private greyColor = '#4F5D70';
  private blueColor = '#2c9aff';
  private blueLightColor = '#84D0FF';
  private greyLightColor = '#EDF1F4';
  private tooltipShadow = 'rgba(0, 0, 0, 0.25)';
  private lineChartPrimary = '#666ee8';
  private lineChartDanger = '#ff4961';
  private labelColor = '#6e6b7b';
  private grid_line_color = 'rgba(200, 200, 200, 0.2)'; // RGBA color helps in dark layout
  constructor(
      private statisticsService:StatisticsService
  ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.statisticsService.getEntityStatistics().subscribe(response =>{
      this.statistics = response.data;
    });
    this.statisticsService.getCountryStatistics().subscribe(response =>{
      this.pieChartLabels = response["entity"];
      this.pieChartData = response["count"];
      // this.data = response["count"];
    });
    this.statisticsService.getMonthlyStatistics().subscribe(response =>{
      this.barChart.datasets[0].data = response["count"];
      this.barChart.labels = response["entity"];
      // this.pieChartData = response["count"];
      // this.data = response["count"];
    });
  }
  private data:any = [];





  public pieChartOptions: ChartOptions = {
    responsive: true,

  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public dataset = [{
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      this.primaryColorShade,
      this.warningColorShade,
      colors.solid.primary,
      this.infoColorShade,
      this.greyColor,
      this.successColorShade,
      "#2B3467",
      "#001021",
      "#034748",
      "#0C6481",
      "#1481BA",
      "#11B5E4",
      this.primaryColorShade,
      this.warningColorShade,
      colors.solid.primary,
      this.infoColorShade,
      this.greyColor,
      this.successColorShade,
      "#2B3467",
      "#001021",
      "#034748",
      "#0C6481",
      "#1481BA",
      "#11B5E4",
      this.primaryColorShade,
      this.warningColorShade,
      colors.solid.primary,
      this.infoColorShade,
      this.greyColor,
      this.successColorShade,
      "#2B3467",
      "#001021",
      "#034748",
      "#0C6481",
      "#1481BA",
      "#11B5E4",
      this.primaryColorShade,
      this.warningColorShade,
      colors.solid.primary,
      this.infoColorShade,
      this.greyColor,
      this.successColorShade,
      "#2B3467",
      "#001021",
      "#034748",
      "#0C6481",
      "#1481BA",
      "#11B5E4",
    ],
    hoverOffset: 4
  }];
  public barChart = {
    chartType: 'bar',
    datasets: [
      {
        data: [],
        backgroundColor: this.successColorShade,
        borderColor: 'transparent',
        hoverBackgroundColor: this.successColorShade,
        hoverBorderColor: this.successColorShade
      }
    ],
    labels: [],
    options: {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'bottom'
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: this.tooltipShadow,
        backgroundColor: colors.solid.white,
        titleFontColor: colors.solid.black,
        bodyFontColor: colors.solid.black
      },
      scales: {
        xAxes: [
          {
            barThickness: 15,
            display: true,
            gridLines: {
              display: true,
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            },
            scaleLabel: {
              display: true
            },
            ticks: {
              fontColor: this.labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: this.labelColor
            }
          }
        ]
      }
    },
    legend: false
  };
}
