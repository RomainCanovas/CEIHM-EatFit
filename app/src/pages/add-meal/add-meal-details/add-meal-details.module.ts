import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMealDetailsPage } from './add-meal-details';

@NgModule({
  declarations: [
    AddMealDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMealDetailsPage),
  ],
})
export class AddMealDetailsPageModule {}
