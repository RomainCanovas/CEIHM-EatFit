import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {WeightPage} from "../weight/weight/weight";
import {StatsPage} from "../stats/stats";
import {AddMealPage} from "../add-meal/add-meal/add-meal";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  addClick = false;
  kcal = 2988;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.kcal = this.getRandom(1000,3000)
  }


  openWeight() {
    this.navCtrl.push(WeightPage);
  }

  openAddMeal() {
    this.addClick = false;
    this.navCtrl.push(AddMealPage);
  }

  openAddMealChoicePicker(){
    this.addClick = true;
    //this.advanceSearch();
  }

  getRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  advanceSearch(): void
  {
    let prompt = this.alertCtrl.create({
      title: 'Repas à ajouter',
      inputs : [
        {
          type:'radio',
          label:'Petit déjeuner',
          value:'breakfast'
        },
        {
          type:'radio',
          label:'Déjeuner',
          value:'Lunch'
        },
        {
          type:'radio',
          label:'Diner',
          value:'Dinner'
        }],
      buttons : [
        {
          text: "Annuler",
          handler: data => {
            console.log("cancel clicked");
          }
        },
        {
          text: "Valider",
          handler: data => {
            this.navCtrl.push(AddMealPage);
          }
        }]});
    prompt.present();
  }

  openStats(){
    console.log("yo")
    this.navCtrl.push(StatsPage)
  }

}
