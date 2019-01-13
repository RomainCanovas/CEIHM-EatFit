import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMealScanPage } from './add-meal-scan';

@NgModule({
  declarations: [
    AddMealScanPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMealScanPage),
  ],
})
export class AddMealScanPageModule {}
