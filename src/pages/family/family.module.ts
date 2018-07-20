import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FamilyPage } from './family';

@NgModule({
  declarations: [
    FamilyPage,
  ],
  imports: [
    IonicPageModule.forChild(FamilyPage),
  ],
})
export class FamilyPageModule {}
