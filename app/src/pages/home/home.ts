import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeightPage} from "../weight/weight/weight";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  openWeight() {
    this.navCtrl.push(WeightPage);
  }

}
