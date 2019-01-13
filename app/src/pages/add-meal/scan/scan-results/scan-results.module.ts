import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanResultsPage } from './scan-results';

@NgModule({
  declarations: [
    ScanResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanResultsPage),
  ],
})
export class ScanResultsPageModule {}
