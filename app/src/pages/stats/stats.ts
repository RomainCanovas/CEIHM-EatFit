import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SharePage} from "../share/share";
import {Chart} from 'chart.js';
import {HomePage} from "../home/home";

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {
  @ViewChild('lineChart') lineChart;

  text;

  public weight: any = {
    "weight": [
      {
        'weight': this.getRandom(100, 200),
        'date': '15/01/2019'
      },
      {
        'weight': this.getRandom(100, 200),
        'date': '16/01/2019'
      },
      {
        'weight': this.getRandom(100, 200),
        'date': '17/01/2019'
      },
      {
        'weight': this.getRandom(100, 200),
        'date': '18/01/2019'
      },
      {
        'weight': this.getRandom(100, 200),
        'date': '19/01/2019'
      },
      {
        'weight': this.getRandom(100, 200),
        'date': '20/01/2019'
      }
    ]
  };
  public lineChartEl: any;
  public chartValues: any = [];
  public chartLabels: any = [];

  ionViewDidLoad() {
    this.defineChartData();
    this.createLineChart();
  }

  defineChartData() {
    let k: any;

    for (k in this.weight.weight) {
      var value = this.weight.weight[k];

      this.chartLabels.push(value.date);
      this.chartValues.push(value.weight);
    }

    this.text = this.weight.weight[k].weight;
  }

  createLineChart() {
    this.lineChartEl = new Chart(this.lineChart.nativeElement,
      {
        type: 'line',
        data: {
          labels: this.chartLabels,
          datasets: [{
            label: 'Progression',
            data: this.chartValues,
            duration: 2000,
            easing: 'easeInQuart',
            fill: false
          }]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true   // minimum value will be 0.
              }
            }]
          }


        }
      });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  share() {
    this.navCtrl.push(SharePage);
  }

  home() {
    this.navCtrl.push(HomePage);
  }


}
