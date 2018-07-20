import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
	selector: 'page-style',
	templateUrl: 'style.html',
})
export class StylePage {

	// banner轮播图数据
	sildesList = [];
	// 限量秒杀数据
	seckillLists = [];
	// 编辑精选数据
	editList = [];
	// 每日新知数据
	everydayData = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
		
		this.sildesList = [
			{
				img: 'assets/imgs/module1/1.jpg'
			},{
				img: 'assets/imgs/module1/2.png'
			},{
				img: 'assets/imgs/module1/3.png'
			},{
				img: 'assets/imgs/module1/4.jpg'
			},{
				img: 'assets/imgs/module1/5.jpg'
			}
		];

		this.seckillLists = [
			{
				img: 'assets/imgs/module1/miaosha_02.png',
				title: 'R语言数据分析挖掘实战',
				finaly : '5.00',
				del: '110.00',
				num: '限量30席'
			},{
				img: 'assets/imgs/module1/miaosha_01.png',
				title: '书法课 | 隶书《史晨碑》精讲',
				finaly : '9.90',
				del: '169.00',
				num: '限量20席'
			},{
				img: 'assets/imgs/module1/miaosha_02.png',
				title: 'R语言数据分析挖掘实战',
				finaly : '5.00',
				del: '110.00',
				num: '限量30席'
			},{
				img: 'assets/imgs/module1/miaosha_01.png',
				title: '书法课 | 隶书《史晨碑》精讲',
				finaly : '9.90',
				del: '169.00',
				num: '限量20席'
			},{
				img: 'assets/imgs/module1/miaosha_02.png',
				title: 'R语言数据分析挖掘实战',
				finaly : '5.00',
				del: '110.00',
				num: '限量30席'
			}
		];

		this.editList = [
			{
				img: 'assets/imgs/module1/tab1_edit_01.png',
				title: 'html+css最佳入门实战',
				score: '4.0',
				num: '1902',
				dec: '零基础最佳入门实战80课'
			},{
				img: 'assets/imgs/module1/tab1_edit_02.png',
				title: 'html5精讲',
				score: '4.8',
				num: '7979',
				dec: '做最接地气的HTML视频参考手册'
			},{
				img: 'assets/imgs/module1/tab1_edit_03.png',
				title: '微信小程序入门与实战',
				score: '4.0',
				num: '1902',
				dec: '此视频是免费视频教程，从小程序基本概念，组件到项目实战开发'
			}
		];
	}

	ionViewDidLoad() {}

	doInfinite(e) {
		let _this = this;
		setTimeout(function(){
			_this.http.get('/assets/data/everydayData.json')
			.subscribe(function(res){
				// console.log(res.json().error_no);
				if(res.json().error_no === 0){
					_this.everydayData = res.json().data;
				}else{
					alert(res.json().msg);
				}
				e.complete();
			})
		}, 300)
	}

}
