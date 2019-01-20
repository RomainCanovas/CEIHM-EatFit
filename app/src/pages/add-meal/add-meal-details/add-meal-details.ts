import {HomePage} from "../../home/home";

declare var require: any
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-meal-details',
  templateUrl: 'add-meal-details.html',
})
export class AddMealDetailsPage {
  name: string[] = [];
  weight: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.name = navParams.get('tab');
    if(!this.name) this.name = ['poulet','riz']
    for (let i = 0; i < this.name.length; i++) {
      this.weight.push(100);
    }
    console.log(this.weight);
  }


  decreaseWeight(i) {
    this.weight[i] = this.weight[i] - 5;
  }

  increaseWeight(i) {
    this.weight[i] = this.weight[i] + 5;
  }

  goToRoot() {
    this.presentToastCancel();
    this.navCtrl.setRoot(HomePage);
  }


  presentToastCancel() {
    let toast = this.toastCtrl.create({
      message: 'Votre repas a bien été enregistré',
      duration: 4000,
      position: 'bottom'
    });
    toast.present();
  }


}
