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

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

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
    this.navCtrl.push(StatsPage)
  }

}
