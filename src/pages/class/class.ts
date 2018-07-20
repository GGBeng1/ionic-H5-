import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the ClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class',
  templateUrl: 'class.html'
})
export class ClassPage {
    slidesItems = [];
    classList = [];
    classListFree = [];
    floatImg =[];
    slidesItems2 = [];
    slidesItems3 = [];
    slidesItems4 = [];
    i = 0;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
      this.slidesItems=[
          {img:'assets/imgs/module3/1.jpg'},
          {img:'assets/imgs/module3/2.png'},
          {img:'assets/imgs/module3/3.png' },
          {img:'assets/imgs/module3/4.jpg' },
          {img:'assets/imgs/module3/5.jpg'}
        ];
      this.classList = [
        {
          img:'assets/imgs/6.jpg',
          title:'TensorFlow实用教程',
          ito:'4.7 148人学过',
          prc:'￥69',
          reprc:'￥95.00'
        },
        {
          img:'assets/imgs/6.jpg',
          title:'TensorFlow实用教程',
          ito:'4.7 148人学过',
          prc:'￥69',
          reprc:'￥95.00'
        },
        {
          img:'assets/imgs/6.jpg',
          title:'TensorFlow实用教程',
          ito:'4.7 148人学过',
          prc:'￥69',
          reprc:'￥95.00'
        },
        {
          img:'assets/imgs/6.jpg',
          title:'TensorFlow实用教程',
          ito:'4.7 148人学过',
          prc:'￥69',
          reprc:'￥95.00'
        },
        {
          img:'assets/imgs/6.jpg',
          title:'TensorFlow实用教程',
          ito:'4.7 148人学过',
          prc:'￥69',
          reprc:'￥95.00'
        },
        {
          img:'assets/imgs/6.jpg',
          title:'TensorFlow实用教程',
          ito:'4.7 148人学过',
          prc:'￥69',
          reprc:'￥95.00'
        }
      ];
      this.classListFree = [
        {
          img:'assets/imgs/6.jpg',
          ito:'148人学过',
        },{
          img:'assets/imgs/6.jpg',
          ito:'148人学过',
        },{
          img:'assets/imgs/6.jpg',
          ito:'148人学过',
        },{
          img:'assets/imgs/6.jpg',
          ito:'148人学过',
        },{
          img:'assets/imgs/6.jpg',
          ito:'148人学过',
        },{
          img:'assets/imgs/6.jpg',
          ito:'148人学过',
        }

      ];
      this.floatImg = [
          {img:'assets/imgs/module3/1.jpg'},
          {img:'assets/imgs/module3/2.png'},
          {img:'assets/imgs/module3/3.png' },
          {img:'assets/imgs/module3/4.jpg' },
          {img:'assets/imgs/module3/5.jpg'}
        ];

  }
  doInfinite(e){
      // console.log(e);
      var me = this;

      setTimeout(function(){
         // console.log(this)
        me.http.get("../../assets/rotate2.json")
          .subscribe(res=>{
           me.slidesItems2 = res.json().data
           // console.log(res.json())
           e.complete();
           // console.log(123)
        })
      },1000)
      // this.http.get("../../assets/rotate2.json")
      //     .subscribe(res=>{
      //      this.slidesItems3 = res.json().data
      //      // console.log(res.json())
      //      e.complete();
      //   })
      // this.http.get("../../assets/rotate2.json")
      //     .subscribe(res=>{
      //      this.slidesItems4 = res.json().data
      //      // console.log(res.json())
      //      e.complete();
      //   })
  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad ClassPage');
  }
  rotate(e) {
    this.i++
    console.log(this.i)
    // e.target.style.animation='donghua 5s linear 0s 2 alternate forwards;'
    if(this.i == 1){
      this.http.get('../../assets/rotate.json')
        .subscribe(res=>{
           this.classList = res.json().data
           // console.log(res.json())
        })
      }else if(this.i == 2){
         this.http.get('../../assets/rotate2.json')
        .subscribe(res=>{
           this.classList = res.json().data
           // console.log(res.json())
        })
      }
  }
}
// else if(this.i == 2){
//         this.http.get('../../assets/rotate.json')
//         .subscribe(res=>{
//            this.classList = res.json().data
//            // console.log(res.json())
//       }
//
