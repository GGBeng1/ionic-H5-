import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MydPage } from './myd';

@NgModule({
  declarations: [
    MydPage,
  ],
  imports: [
    IonicPageModule.forChild(MydPage),
  ],
})
export class MydPageModule {}
