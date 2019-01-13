declare var require: any;

import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {ScanResultsPage} from "../scan-results/scan-results";

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private barcodeScanner: BarcodeScanner) {
  }


  getProductInfo(barcode) {
    let req = new XMLHttpRequest();
    req.open("GET", "https://fr.openfoodfacts.org/api/v0/produit/" + barcode + ".json", false);
    req.send(null);
    let jsonResult = JSON.parse(req.responseText);
    let name = jsonResult.product.product_name;
    let imgUrl = jsonResult.product.image_url;
    this.navCtrl.pop();
    this.navCtrl.push(ScanResultsPage, { name: name, imgUrl: imgUrl });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMealScanPage');
    this.barcodeScanner.scan().then(barcodeData => {
      this.getProductInfo(barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
