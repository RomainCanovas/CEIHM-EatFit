declare var require: any;

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the AddMealScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-meal-scan',
  templateUrl: 'add-meal-scan.html',
})
export class AddMealScanPage {

  private info;

  private barcode;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
    this.barcodeScanner.scan().then(barcodeData => {
      this.getProductInfo(barcodeData);
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }


  getProductInfo(barcode) {
    let req = new XMLHttpRequest();
    req.open("GET", "https://fr.openfoodfacts.org/api/v0/produit/" + this.barcode + ".json", false);
    req.send(null);
    let jsonResult = JSON.parse(req.responseText);
    let name = jsonResult.product;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMealScanPage');
  }

}
