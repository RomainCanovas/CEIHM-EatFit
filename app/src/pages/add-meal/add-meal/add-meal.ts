import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StatsPage} from "../../stats/stats";
import {AddMealScanPage} from "../scan/add-meal-scan/add-meal-scan";
import {AddMealVocalPage} from "../add-meal-vocal/add-meal-vocal";

/**
 * Generated class for the AddMealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-meal',
  templateUrl: 'add-meal.html',
})
export class AddMealPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMealPage');
  }

  openScan(){
    this.navCtrl.push(AddMealScanPage);
  }

  openVoice(){
    this.navCtrl.push(AddMealVocalPage);
  }

}
