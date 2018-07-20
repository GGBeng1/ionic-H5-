import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-list',
	templateUrl: 'list.html',
})

export class ListPage {

	selected = 0;

	navData = [];

	idx = 0;

	editData = [];

	constructor(public navCtrl: NavController, public navParams: NavParams) {

		this.navData = [
			{
				title: '特别推荐'
			},{
				title: '办公效率'
			},{
				title: '职业发展'
			},{
				title: '编程开发'
			},{
				title: '产品和设计'
			},{
				title: '生活方式'
			},{
				title: '亲子教育'
			},{
				title: '语言学习'
			}
		];

		this.editData = [
			{
				text: '如何与老板有效沟通？秘籍在这里',
				color: 'skyblue'
			},{
				text: '嵩天教你11周精通Python',
				color: 'orange'
			},{
				text: '怎样保持好的职场关系？',
				color: 'red'
			},{
				text: '向高绩效职场人学习优秀习惯！',
				color: 'green'
			},{
				text: '看破”泡沫“，回归区块链本质',
				color: 'pink'
			}
		]
	}

	ionViewDidLoad() {}

	tabModel (e) {

		// console.log(arguments[0]);
		this.selected = arguments[1];

		switch (arguments[1]){
			case 0:
				this.idx = 0;
				break;
			case 1:
				this.idx = 1;
				break;
			case 2:
				this.idx = 2;
				break;
			case 3:
				this.idx = 3;
				break;
			case 4:
				this.idx = 4;
				break;
			case 5:
				this.idx = 5;
				break;
			case 6:
				this.idx = 6;
				break;
			case 7:
				this.idx = 7;
				break;
		}

	}
	
}
