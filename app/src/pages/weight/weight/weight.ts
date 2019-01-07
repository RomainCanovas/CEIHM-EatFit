import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeightPage');
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

      console.log('dlk');
      this.showSuccessToast(data.weight);
      console.log('dlk');
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
      message: 'Votre nouveau poids est ' + weight + ' kg',
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
