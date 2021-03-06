declare var require: any;

import {Component} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
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

  private names = [];
  private imgsUrl = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private barcodeScanner: BarcodeScanner,
              private alertCtrl: AlertController) {
    this.names = navParams.get("names");
    this.imgsUrl = navParams.get("imgsUrl");
  }


  getProductInfo(barcode) {
    let req = new XMLHttpRequest();
    req.open("GET", "https://fr.openfoodfacts.org/api/v0/produit/" + barcode.text + ".json", false);
    req.send(null);
    try {
      let jsonResult = JSON.parse(req.responseText);
      let name = jsonResult.product.product_name;
      let imgUrl = jsonResult.product.image_url;
      this.names.push(name);
      this.imgsUrl.push(imgUrl);
      this.navCtrl.push(ScanResultsPage, {names: this.names, imgsUrl: this.imgsUrl});
    } catch (e) {
      let alert = this.alertCtrl.create({
        title: 'Oups!',
        subTitle: 'Ce code barre n\'est pas reconnu, veuillez rééssayer',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.push(ScanResultsPage, {names: this.names, imgsUrl: this.imgsUrl});
    }
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
