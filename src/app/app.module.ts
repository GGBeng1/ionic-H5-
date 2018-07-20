import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { CountPage } from '../pages/count/count';
import { MystudyPage } from '../pages/mystudy/mystudy';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StylePage } from '../pages/style/style';
import { ClassPage } from '../pages/class/class';
import { MydPage } from '../pages/myd/myd';
import { AvatarPage } from '../pages/avatar/avatar';
import { ProfessionalPage } from '../pages/professional/professional';
import { FamilyPage } from '../pages/family/family';
// import { SuperTabsModule } from 'ionic2-super-tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CountPage,
    MystudyPage,
    ListPage,
    StylePage,
    ClassPage,
    ProfessionalPage,
    AvatarPage,
    FamilyPage,
    MydPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    CountPage,
    MystudyPage,
    ListPage,
    StylePage,
    ClassPage,
    ProfessionalPage,
    AvatarPage,
    FamilyPage,
    MydPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
