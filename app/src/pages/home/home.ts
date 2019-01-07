import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeightPage} from "../weight/weight/weight";
import {StatsPage} from "../stats/stats";
import {AddMealPage} from "../add-meal/add-meal/add-meal";

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

  openAddMeal() {
    this.navCtrl.push(AddMealPage);
  }

  openStats(){
    this.navCtrl.push(StatsPage)
  }

}
