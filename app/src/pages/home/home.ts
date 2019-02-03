import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {WeightPage} from "../weight/weight/weight";
import {StatsPage} from "../stats/stats";
import {AddMealPage} from "../add-meal/add-meal/add-meal";
import moment from 'moment';
import {BouffeProvider} from "../../providers/bouffe/bouffe";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  breakfast;
  lunch;
  dinner;
  currentDay;
  today;

  addClick = false;
  kcal = 2988;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public bouffeP: BouffeProvider) {
    moment.locale('fr')
    this.kcal = this.getRandom(1000, 3000)
    this.today = moment()
    this.currentDay = moment();
    this.fetchMeals();

  }

  getFoodResume(f){
    let r = '';
    for(let i of f.foods){
      r += i.name + ' '
    }
    return r;
  }


  fetchMeals() {
    this.breakfast = this.bouffeP.getMeal(this.currentDay, 'breakfast');
    this.lunch = this.bouffeP.getMeal(this.currentDay, 'lunch');
    this.dinner = this.bouffeP.getMeal(this.currentDay, 'dinner');
  }



  datePlus() {
    this.currentDay = this.currentDay.add(1, 'day');
    this.fetchMeals();
  }

  dateMinus() {
    this.currentDay = this.currentDay.subtract(1, 'day')
    this.fetchMeals()
  }


  openWeight() {
    this.navCtrl.push(WeightPage);
  }

  openAddMeal(daytime) {
    this.bouffeP.tempDayTime = daytime;
    this.bouffeP.tempDay = this.currentDay;

    this.addClick = false;
    this.navCtrl.push(AddMealPage);
  }

  openAddMealChoicePicker() {
    this.addClick = true;
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  openStats() {
    this.navCtrl.push(StatsPage)
  }

}
