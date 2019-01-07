import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMealListPage } from './add-meal-list';

@NgModule({
  declarations: [
    AddMealListPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMealListPage),
  ],
})
export class AddMealListPageModule {}
