import {HomePage} from "../../home/home";

declare var require: any
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {BouffeProvider} from "../../../providers/bouffe/bouffe";

@IonicPage()
@Component({
  selector: 'page-add-meal-details',
  templateUrl: 'add-meal-details.html',
})
export class AddMealDetailsPage {
  name: string[] = [];
  weight: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
              public bouffeP: BouffeProvider) {

    this.name = navParams.get('tab');
    if (!this.name) this.name = ['poulet', 'riz']
    for (let i = 0; i < this.name.length; i++) {
      this.weight.push(100);
    }

  }


  decreaseWeight(i) {
    this.weight[i] = this.weight[i] - 5;
  }

  increaseWeight(i) {
    this.weight[i] = this.weight[i] + 5;
  }

  goToRoot() {

    let obj = {};
    obj['foods'] = [];
    for (let i = 0; i < this.name.length; i++) {
      obj['foods'].push({
        name : this.name[i],
        quantity : this.weight[i]
      });
    }

    this.bouffeP.addMeal(obj)


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
