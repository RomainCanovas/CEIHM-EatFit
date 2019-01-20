import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController) {
  }


  goHome(){
    this.navCtrl.push(HomePage);
    this.toastCtrl.create({
      message: 'Le suivi a été partagé.',
      duration: 3000,
      position: 'bottom'
    }).present();
  }

}
