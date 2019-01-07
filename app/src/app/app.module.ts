import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AddMealPage} from "../pages/add-meal/add-meal/add-meal";
import {AddMealDetailsPage} from "../pages/add-meal/add-meal-details/add-meal-details";
import {AddMealListPage} from "../pages/add-meal/add-meal-list/add-meal-list";
import {AddMealScanPage} from "../pages/add-meal/add-meal-scan/add-meal-scan";
import {AddMealVocalPage} from "../pages/add-meal/add-meal-vocal/add-meal-vocal";
import {SharePage} from "../pages/share/share";
import {StatsPage} from "../pages/stats/stats";
import {WeightPage} from "../pages/weight/weight/weight";
import {UpdateWeightPage} from "../pages/weight/update-weight/update-weight";
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddMealPage,
    AddMealDetailsPage,
    AddMealListPage,
    AddMealScanPage,
    AddMealVocalPage,
    SharePage,
    StatsPage,
    WeightPage,
    UpdateWeightPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddMealPage,
    AddMealDetailsPage,
    AddMealListPage,
    AddMealScanPage,
    AddMealVocalPage,
    SharePage,
    StatsPage,
    WeightPage,
    UpdateWeightPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
