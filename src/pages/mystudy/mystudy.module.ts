import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MystudyPage } from './mystudy';

@NgModule({
  declarations: [
    MystudyPage,
  ],
  imports: [
    IonicPageModule.forChild(MystudyPage),
  ],
})
export class MystudyPageModule {}
