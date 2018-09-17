import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
  data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];
  faqList: any;
  userFaq:any;
  partnerFaq: any;
  accountFaq: any;
  information1: any;

  information: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.faqList ={"code":200,"user":[{"id":1,"quesion":"Hilife Browery","details":"Pub / Dining","icon":"ios-arrow-down","showDetails":false},{"id":2,"quesion":"HardCup Browery","details":"Pub / Drinks","icon":"ios-arrow-down","showDetails":false},{"id":3,"quesion":"Club 8","details":"Pub / Dj","icon":"ios-arrow-down","showDetails":false},{"id":4,"quesion":"Night Life Browery","details":"Pub / Buffet","icon":"ios-arrow-down","showDetails":false}],"Partner":[{"id":1,"quesion":"Hilife Browery","details":"Pub / Dining","icon":"ios-arrow-down","showDetails":false},{"id":2,"quesion":"HardCup Browery","details":"Pub / Drinks","icon":"ios-arrow-down","showDetails":false},{"id":3,"quesion":"Club 8","details":"Pub / Dj","icon":"ios-arrow-down","showDetails":false},{"id":4,"quesion":"Night Life Browery","details":"Pub / Buffet","icon":"ios-arrow-down","showDetails":false}],"Account":[{"id":1,"quesion":"Hilife Browery","details":"Pub / Dining","icon":"ios-arrow-down","showDetails":false},{"id":2,"quesion":"HardCup Browery","details":"Pub / Drinks","icon":"ios-arrow-down","showDetails":false},{"id":3,"quesion":"Club 8","details":"Pub / Dj","icon":"ios-arrow-down","showDetails":false},{"id":4,"quesion":"Night Life Browery","details":"Pub / Buffet","icon":"ios-arrow-down","showDetails":false}]};
    this.information = {"items":[{"name":"Action","children":[{"name":"Special Academy Pizza","information":"Pastrami pork belly ball tip andouille corned beef jerky shankle landjaeger. Chicken chuck porchetta picanha, ham brisket tenderloin venison meatloaf landjaeger jowl.","price":"$25"},{"name":"Pizza Ionic","information":"Pork chop meatloaf rump, meatball shoulder turducken alcatra doner sausage capicola pork strip steak turkey cupim leberkas.","price":"$19.99"}]},{"name":"Pizza","children":[{"name":"Traditional","children":[{"name":"Pizza Salami","information":"Pork chop jowl capicola porchetta, kielbasa prosciutto boudin bacon pork pig.","price":"$10"},{"name":"Pizza Prosciutto","information":"Pork chop pastrami landjaeger chuck brisket","price":"$12"}]},{"name":"Gourmet","children":[{"name":"Pizza Bombay","information":"Pastrami ham hock ball tip, tongue ribeye chuck ham beef bresaola leberkas.","price":"$13"},{"name":"Pizza Crazy Dog","information":"Andouille spare ribs meatloaf swine ground round pork loin, brisket chuck bacon tongue.","price":"$14"},{"name":"Pizza Italia","information":"Ribeye ham t-bone, tail ground round biltong picanha sausage rump corned beef.","price":"$11"},{"name":"Pizza Tuna","information":"Pork chop pastrami landjaeger chuck brisket","price":"$14"}]},{"name":"Bestseller","children":[{"name":"Pizza Academy","information":"Frankfurter tail capicola cupim shankle salami, beef ribs beef boudin porchetta ball tip leberkas turkey tenderloin.","price":"$25"},{"name":"Pizza Ionic","information":"Shank chuck tail, kevin shankle ham hock pork loin pork hamburger beef ribs.","price":"$19.99"}]}]},{"name":"Drinks","children":[{"name":"Special Academy Pizza","information":" Landjaeger fatback shank frankfurter, tongue shoulder ham strip steak pancetta pork short loin corned beef short ribs biltong cow","price":"$25"},{"name":"Pizza Ionic","information":"Pork chop pastrami landjaeger chuck brisket","price":"$19.99"}]}]};
    this.userFaq = this.faqList.user;
    this.partnerFaq = this.faqList.Partner;
    this.accountFaq = this.faqList.Account;
    console.log(this.userFaq);
    // for(let i = 0; i < 10; i++ ){
    //   this.data.push({
    //       title: 'Title '+i,
    //       details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //       icon: 'ios-arrow-down',  
    //       showDetails: false
    //     });
    // }
  }
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
 
 
  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-arrow-down';
    } else {
        data.showDetails = true;
        data.icon = 'ios-arrow-up';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

}
