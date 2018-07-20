import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvatarPage } from "../avatar/avatar";

/**
 * Generated class for the CountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-count',
    templateUrl: 'count.html',
})
export class CountPage {
    listItem = [ {name:"bookmark",title:'学习兴趣'},
                 {name:"albums",title:"消息中心"},
                 {name:'cart',title:"购物车"},
                 {name:'logo-yen',title:"我的订单"},
                 {name:'card',title:"我的卡券"},
                 {name:'md-wifi',title:"在线学习免流量"},
                 {name:'md-attach',title:"手机账号绑定"},
                 {name:'settings',title:"设置"},
                 {name:'chatboxes',title:"帮助与反馈"}
                 ]
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
    }
    avatar(){
        this.navCtrl.push(AvatarPage)
    }

}
