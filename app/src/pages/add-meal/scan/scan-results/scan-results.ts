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

  private name: string;
  private imgUrl: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name=navParams.get("name");
    this.imgUrl=navParams.get("imgUrl");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanResultsPage');
  }

  openMealDetails() {
    this.navCtrl.push(AddMealDetailsPage);
  }

  openScanPage() {
    this.navCtrl.push(AddMealScanPage);
  }

}
