import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StatsPage} from "../../stats/stats";
import {AddMealScanPage} from "../scan/add-meal-scan/add-meal-scan";
import {AddMealVocalPage} from "../add-meal-vocal/add-meal-vocal";
import {AddMealListPage} from "../add-meal-list/add-meal-list";

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

  showVoiceHelp = false;
  showListHelp = false;
  showScanHelp = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMealPage');
  }

  openScan(){
    this.navCtrl.push(AddMealScanPage, {names: [], imgsUrl: []});
  }

  openVoice(){
    this.navCtrl.push(AddMealVocalPage);
  }
  openList(){
      this.navCtrl.push(AddMealListPage);
  }


  voiceHelp(){
    this.showVoiceHelp = true;
    this.showListHelp = false;
    this.showScanHelp = false;
  }

  listHelp(){
    this.showVoiceHelp = false;
    this.showListHelp = true;
    this.showScanHelp = false;
  }

  scanHelp(){
    this.showVoiceHelp = false;
    this.showListHelp = false;
    this.showScanHelp = true;
  }

}
