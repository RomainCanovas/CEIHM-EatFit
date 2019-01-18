import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddMealPage} from "../../add-meal/add-meal";
import {AddMealDetailsPage} from "../../add-meal-details/add-meal-details";
import {AddMealScanPage} from "../add-meal-scan/add-meal-scan";

/**
 * Generated class for the ScanResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan-results',
  templateUrl: 'scan-results.html',
})
export class ScanResultsPage {

  private names = [];
  private imgsUrl = [];
  private repas = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.names=navParams.get("names");
    this.imgsUrl=navParams.get("imgsUrl");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanResultsPage');
  }

  openMealDetails() {
    for(var i=0;i<this.names.length;i++) {
      this.repas.push(this.names[i]);
    }
    this.navCtrl.push(AddMealDetailsPage, {tab: this.repas});
  }

  deleteItem(index){
    this.names.splice(index, 1);
    this.imgsUrl.splice(index, 1);
  }

  openScanPage() {
    this.navCtrl.push(AddMealScanPage, {names: this.names, imgsUrl:this.imgsUrl});
  }

}
