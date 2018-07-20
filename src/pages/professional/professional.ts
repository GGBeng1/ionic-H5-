import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ProfessionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-professional',
  templateUrl: 'professional.html',
})
export class ProfessionalPage {
  // listNavigation = [
  //     {msg1: '产品设计'},
  //     {msg2: '前台开发'},
  //     {msg3: '后台开发'},
  //     {msg4: '技术支撑'},
  //     {msg5: '艺术'},
  //     {msg6: '其它'}
  // ];
  listTeacher = [];
  listIntroduce = [];
  listQuestion = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.listTeacher = [
      {
        tou: 'assets/imgs/module4/t1.png',
        text: '吴恩达 Andrew Ng',
        text1: 'deeplearning.ai 创始人',
        biao: 'assets/imgs/module4/h1.jpg'
      },
      {
        tou: 'assets/imgs/module4/t2.png',
        text: '翁恺',
        text1: '浙江大学计算机学院教授',
        biao: 'assets/imgs/module4/h2.png'
      },
      {
        tou: 'assets/imgs/module4/t4.png',
        text: '嵩天',
        text1: '北京理工大学计算机学院副教授',
        biao: 'assets/imgs/module4/h4.png'
      },
      {
        tou: 'assets/imgs/module4/t5.png',
        text: '大鹏',
        text1: '城市数据团联合创始人',
        biao: 'assets/imgs/module4/h5.png'
      },
      {
        tou: 'assets/imgs/module4/t6.png',
        text: '郭冠敏',
        text1: '网易UEDC总监',
        biao: 'assets/imgs/module4/h3.png'
      },
      {
        tou: 'assets/imgs/module4/t3.png',
        text: '曹智清',
        text1: '网易杭研项目管理部总监',
        biao: 'assets/imgs/module4/h3.png'
      },
   ];
  this.listIntroduce = [
      {
        img:'assets/imgs/module4/bj2.png',
        title: '初级UI设计师',
        text: '网易UEDC联合浙江大学工业设计系出品。课程以LOFTER、网易云音乐、易信、考拉海购等亿级产品为案例，并由亲身经历这些项目的首席设计师策划教授。'
      },
      {
        img:'assets/imgs/module4/bj3.jpg',
        title: '高级UI设计师',
        text: '涵盖考拉、LOFTER、云音乐、严选、云笔记等网易一线产品真实案例，帮助你完成从初级设计师到高级设计师的转变，开拓设计思路，实现更易用、更具美感和更有商业价值的产品设计。'
      },
      {
        img:'assets/imgs/module4/bj4.jpg',
        title: '交互设计师',
        text: '网易UEDC联合浙江大学工业设计系以实战为牵引，结合真实案例分析，帮助学员全面掌握交互设计知识体系，熟练掌握Axure操作技巧，规范信息架构，打造漂亮的流程设计和页面排版布局，撰写优秀的交互设计文档。'
      },
      {
        img:'assets/imgs/module4/bj5.jpg',
        title: '产品经理',
        text: '三节课联合网易共同打造，带你系统掌握 网易 & BAT 内部产品经理在设计产品过程中的工作技能、方法、流程！通过高强度训练，帮你掌握产品经理必备核心技能！'
      },
      {
        img:'assets/imgs/module4/bj6.jpg',
        title: '产品运营',
        text: '网易出品，从零开始做运营张亮，原新浪微博高级运营经理金璞，三节课创始人黄有璨，网易资深运营合力打造，结合案例剖析，为你揭示运营拉新，促活，留存的秘密。'
      },
      {
        img:'assets/imgs/module4/bj7.jpg',
        title: '互联网项目管理',
        text: '本微专业面向互联网项目管理，由网易杭研项目管理部项目经理们主讲，本课程通过各式各样网易产品案例（考拉、云音乐、网易云等)来帮助学生了解互联网项目管理理论、方法、工具、实践、管理。'
      },
      {
        img:'assets/imgs/module4/bj8.jpg',
        title: '全栈新媒体运营',
        text: '半撇私塾与网易云课堂联合出品，带你3个月成为行业抢手的全栈新媒体人才。从传播、产品、写作、营销等方面，教授最前沿的新媒体技能！'
      },
      {
        img:'assets/imgs/module4/bj9.jpg',
        title: '用户研究员',
        text: '涵盖考拉、LOFTER、网易游戏、云课堂、网易云、智能硬件等网易一线产品真实案例，帮助你洞察用户心理和行为，提取用户需求，设计出让用户惊艳的产品。'
      }
   ];
  this.listQuestion = [
      {
        h4: '1、课程是录播还是直播？',
        text1: '课程采取录播视频+线上作业+直播答疑的形式。录播视频每周更新，更新之后您可以自由安排时间学习，但需注意在规划的学习周期内完成作业，参加考试。'
      },
        {
          h4: '2、课程是不是可以一直看？',
          text1: '初/高级UI设计师，初/高级前端开发工程师，web安全工程师等微专业课程视频是可以永久观看的。',
          text2:'其它微专业课程视频由具体微专业开课方规定，例如全栈新媒体微专业结束后15天课程将关闭。此类视频非永久有效的课程，页面底部问答中标注。',
          text3:'视频之外的在线服务如作业，考试，直播等仅限当期有效。'
      },
        {
          h4: '3、如何与老师进行互动？',
          text1: '除观看课程视频之外，报名后有三种方式跟老师互动：',
      text2: '1）.在讨论问答区跟老师发帖提问，工作日老师24小时内回复（部分课程中老师发起的话题是要参与回复的，有计入成绩，请注意具体的比例） ；',
      text3: '2）.根据学习进度和学员反馈，不定期组织老师直播答疑，时间为晚上，一次一小时左右，具体日期会在学员群里通知，学习公告也会有公示；',
      text4: '3）.每门微专业都会有相应的学员群，可在学员班级群内提问，助教和优秀学员会帮助解答；'
      },
        {
          h4: '4、课程可以离线观看？',
          text1: '移动端在云课堂APP上可以缓存微专业课程视频，离线观看；网页端需在线观看。'
      },
        {
          h4: '5、如果考试通不过怎么办？',
          text1: '我们为考试不通过的学员提供一次重修机会，但是成绩为空，或是学习中途放弃学习和考试的同学，不予以重修机会。',
          text2: '希望同学们注意安排学习时间。'
      }
  ];
  }
  test(){
    document.body.onscroll = function() {
      console.log(123);
    }
  }
}
