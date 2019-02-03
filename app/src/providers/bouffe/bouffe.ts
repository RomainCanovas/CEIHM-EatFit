import {Injectable} from '@angular/core';
import moment from 'moment';

/*
  Generated class for the BouffeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BouffeProvider {

  meals: any[];
  tempDay = null;
  tempDayTime = null;

  constructor() {
    this.meals = [
      {
        date: moment().format('MM DD YY'),
        daytime: 'breakfast',
        foods: [
          {
            name: 'Omelette',
            quantity: 70,
          }, {
            name: 'Bacon',
            quantity: 80
          }
        ]
      },
      {
        date: moment().subtract(1, 'days').format('MM DD YY'),
        daytime: 'dinner',
        foods: [
          {
            name: 'Soupe de potiron',
            quantity: 200,
          }
        ]
      },
      {
        date: moment().subtract(1, 'days').format('MM DD YY'),
        daytime: 'lunch',
        foods: [
          {
            name: 'Pâtes au saumon',
            quantity: 300,
          }
        ]
      },

    ]
  }


  addMeal(obj){
    let curr = null;
    for (let m of this.meals) {
      if (m.date === this.tempDay.format('MM DD YY') && m.daytime === this.tempDayTime) {
        curr = m;
      }
    }

    if(curr){
      curr.foods = obj.foods
    } else {
      this.meals.push({
        date : this.tempDay.format('MM DD YY'),
        daytime : this.tempDayTime,
        foods : obj.foods
      })
    }
  }


  getMeal(date, daytime) {
    let res = null;
    for (let m of this.meals) {
      if (m.date === date.format('MM DD YY') && m.daytime === daytime) {
        res = m
      }
    }
    return res;
  }

}
