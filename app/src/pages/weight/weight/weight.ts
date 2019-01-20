import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

import { Chart } from 'chart.js';

/**
 * Generated class for the WeightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weight',
  templateUrl: 'weight.html',
})
export class WeightPage {

  @ViewChild('lineChart') lineChart;

  text;

  public weight : any = {
    "weight" : [
      {
        'weight' : '80.2',
        'date' : '15/01/2019'
      },
      {
        'weight' : '81.7',
        'date' : '16/01/2019'
      },
      {
        'weight' : '80.9',
        'date' : '17/01/2019'
      },
      {
        'weight' : '79.8',
        'date' : '18/01/2019'
      },
      {
        'weight' : '79.7',
        'date' : '19/01/2019'
      },
      {
        'weight' : '78',
        'date' : '20/01/2019'
      }
    ]
  };
  public lineChartEl : any;
  public chartValues : any = [];
  public chartLabels : any = [];

  ionViewDidLoad()
  {
    this.defineChartData();
    this.createLineChart();
  }

  defineChartData()
  {
    let k : any;

    for(k in this.weight.weight)
    {
      var value = this.weight.weight[k];

      this.chartLabels.push(value.date);
      this.chartValues.push(value.weight);
    }

    this.text = this.weight.weight[k].weight;
  }

  createLineChart()
  {
    this.lineChartEl 			= new Chart(this.lineChart.nativeElement,
      {
        type: 'line',
        data: {
          labels: this.chartLabels,
          datasets: [{
            label                 : 'Weight progression',
            data                  : this.chartValues,
            duration              : 2000,
            easing                : 'easeInQuart',
            fill 				   : false
          }]
        },
        options : {
          maintainAspectRatio: false,
          legend         : {
            display     : false
          },
          scales: {
            yAxes: [{
              ticks: {
                stepSize: 5
              }
            }],
            xAxes: [{
              ticks: {
                autoSkip: false
              }
            }]
          }
        }
      });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  showWeight() {
    let prompt = this.alertCtrl.create({
      title: 'Indiquer votre poids actuel',
      inputs: [
        {
          name: 'weight',
          placeholder: 'Poids (kg)',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Annuler'
        },
        {
          text: 'Confirmer',
          handler: data => {
            this.updateWeight(data)
          }
        }
      ]
    });
    prompt.present();
  }

  private updateWeight(data){
    try{
      this.checkNewWeight(data.weight);

      this.text = data.weight;

      var today = new Date();
      var day = today.getDate();
      var month = today.getMonth() + 1; //January is 0!
      var year = today.getFullYear();

      var fullDay = '' + day + '/' + month + '/' + year;

      this.lineChartEl.data.labels.push(fullDay);
      this.lineChartEl.data.datasets.forEach((dataset) => {
        dataset.data.push(data.weight);
      });
      this.lineChartEl.update();
      this.showSuccessToast(data.weight);
    } catch (e) {
      this.showErrorToast(e.message);
    }
  }

  private showErrorToast(name) {
    const toast = this.toastCtrl.create({
      message: name,
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'x',
      cssClass: "toastError"
    });
    toast.present();
  }

  private showSuccessToast(weight) {
    const toast = this.toastCtrl.create({
      message: 'Votre nouveau poids est ' + this.text + ' kg',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'x',
      cssClass: "toastSuccess"
    });
    toast.present();
  }

  private checkNewWeight(weightRaw) {
    if (weightRaw === ""){
      throw new Error('Please, enter a number');
    }

    //Numerical check

    const weight = parseFloat(weightRaw);

    if (weight < 5){
      throw new RangeError('too skinny');
    }

    if (weight > 200){
      throw new RangeError('too fat');
    }
  }
}
