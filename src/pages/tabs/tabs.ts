import { Component } from '@angular/core';
import { CountPage } from '../count/count';
import { MystudyPage } from '../mystudy/mystudy';
import { ListPage } from '../list/list';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = MystudyPage;
  tab4Root = CountPage;


  constructor() {

  }
}
