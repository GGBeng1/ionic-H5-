import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FamilyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-family',
  templateUrl: 'family.html',
})
export class FamilyPage {
	//轮播图
	Shuffling = [];
	listPeople = [];
	listExperts = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.Shuffling = [
			{
				img: 'assets/imgs/module4/2.png'
			},{
				img: 'assets/imgs/module4/3.png'
			},{
				img: 'assets/imgs/module4/4.jpg'
			},{
				img: 'assets/imgs/module4/5.jpg'
			},{
				img: 'assets/imgs/module4/7.jpg'
			}	
		];
		this.listPeople = [
			{
				img: 'assets/imgs/module4/t1.png',
				name: '周小树',
				text: '网易云课堂基金理财讲师',
				img1: 'assets/imgs/module4/icon.png',
				jie: '远古生物在今天 (二) 关于你想不到的古生物',
				img2: 'assets/imgs/module4/bj2.png'
			},
			{
				img: 'assets/imgs/module4/t1.png',
				name: '周小树',
				text: '网易云课堂基金理财讲师',
				img1: 'assets/imgs/module4/icon.png',
				jie: '远古生物在今天 (二) 关于你想不到的古生物',
				img2: 'assets/imgs/module4/bj2.png'
			},
			{
				img: 'assets/imgs/module4/t1.png',
				name: '周小树',
				text: '网易云课堂基金理财讲师',
				img1: 'assets/imgs/module4/icon.png',
				jie: '远古生物在今天 (二) 关于你想不到的古生物',
				img2: 'assets/imgs/module4/bj2.png'
			},
		];
		this.listExperts = [
		{
			img: 'assets/imgs/module4/h1.jpeg',
			name: '刘万祥ExcelPro',
			jieshao: '数据可视化专家, 著<<Excel图标之道>>',
			num: '11门课程',
			student: '27564位学员',
			title: '一页纸仪表板报告'
		},
		{
			img: 'assets/imgs/module4/h2.jpeg',
			name: '刘万祥ExcelPro',
			jieshao: '数据可视化专家, 著<<Excel图标之道>>',
			num: '11门课程',
			student: '27564位学员',
			title: '一页纸仪表板报告'
		},
		{
			img: 'assets/imgs/module4/h3.jpeg',
			name: '刘万祥ExcelPro',
			jieshao: '数据可视化专家, 著<<Excel图标之道>>',
			num: '11门课程',
			student: '27564位学员',
			title: '一页纸仪表板报告'
		},
		{
			img: 'assets/imgs/module4/h4.jpeg',
			name: '刘万祥ExcelPro',
			jieshao: '数据可视化专家, 著<<Excel图标之道>>',
			num: '11门课程',
			student: '27564位学员',
			title: '一页纸仪表板报告'
		},
		{
			img: 'assets/imgs/module4/h5.jpeg',
			name: '刘万祥ExcelPro',
			jieshao: '数据可视化专家, 著<<Excel图标之道>>',
			num: '11门课程',
			student: '27564位学员',
			title: '一页纸仪表板报告'
		},
		{
			img: 'assets/imgs/module4/h6.jpeg',
			name: '刘万祥ExcelPro',
			jieshao: '数据可视化专家, 著<<Excel图标之道>>',
			num: '11门课程',
			student: '27564位学员',
			title: '一页纸仪表板报告'
		},
		{
			img: 'assets/imgs/module4/h7.jpeg',
			name: '刘万祥ExcelPro',
			jieshao: '数据可视化专家, 著<<Excel图标之道>>',
			num: '11门课程',
			student: '27564位学员',
			title: '一页纸仪表板报告'
		}
		];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyPage');
  }

}
