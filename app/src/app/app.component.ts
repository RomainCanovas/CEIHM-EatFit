import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {AddMealVocalPage} from "../pages/add-meal/add-meal-vocal/add-meal-vocal";
import {AddMealPage} from "../pages/add-meal/add-meal/add-meal";
import {AddMealDetailsPage} from "../pages/add-meal/add-meal-details/add-meal-details";
import {StatsPage} from "../pages/stats/stats";
import {SharePage} from "../pages/share/share";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  rootPage:any = SharePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

