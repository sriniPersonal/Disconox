import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PubdetailsPage } from './pubdetails';

@NgModule({
  declarations: [
    PubdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PubdetailsPage),
  ],
})
export class PubdetailsPageModule {}
