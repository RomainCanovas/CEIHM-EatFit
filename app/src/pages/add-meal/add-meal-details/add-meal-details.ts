import {HomePage} from "../../home/home";

declare var require: any
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-add-meal-details',
    templateUrl: 'add-meal-details.html',
})
export class AddMealDetailsPage {
    name: string[] = [];
    weight: any[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.name = navParams.get('tab');
        for (let i = 0; i < this.name.length; i++) {
            this.weight.push(100);
        }
        console.log(this.weight);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddMealDetailsPage');
    }

    decreaseWeight(i){
        this.weight[i] = this.weight[i]-5;
    }

    increaseWeight(i){
        this.weight[i] = this.weight[i]+5;
    }

    goToRoot(){
      this.navCtrl.setRoot(HomePage);
    }


}
