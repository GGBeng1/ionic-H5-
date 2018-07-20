import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MydPage } from "../myd/myd";
import { TabsPage} from "../tabs/tabs";
import { AvatarPage } from "../avatar/avatar";

/**
 * Generated class for the MystudyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mystudy',
  templateUrl: 'mystudy.html',
})
export class MystudyPage {
    segList = ["我的订阅","我的收藏","我的下载"];
    // testSegment = this.segList[0]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  tabs(){
      this.navCtrl.push(TabsPage)
  }
  buttonTap(e){
      console.log(e.target.innerHTML.slice(0,4))
      if(e.target.innerHTML.slice(0,4) == this.segList[0]){
          this.navCtrl.push(MydPage)
      }

  }
  avatar(e){
        // this.navCtrl.push(AvatarPage)
    }
}
