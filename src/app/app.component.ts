import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {FaqPage} from '../pages/faq/faq';
import {AboutPage} from '../pages/about/about';
import {LoginPage} from '../pages/login/login';
import {BeacomePartnerPage} from '../pages/beacome-partner/beacome-partner';
import { TermsOfUsePage} from '../pages/terms-of-use/terms-of-use';
import { ContactPage} from '../pages/contact/contact';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, Icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
   this.pages = [
 
  { title: 'Login', component: LoginPage, Icon :'ios-home-outline' },
  { title: 'Search Details', component: HomePage , Icon :'ios-home-outline' },
  { title: 'Book A Cab', component: HomePage , Icon : 'ios-home-outline'},
  { title: 'Notifications', component: HomePage , Icon : 'ios-home-outline' },
  { title: "FAQ's", component: FaqPage , Icon : 'ios-home-outline'},
  { title: 'About Us', component: AboutPage , Icon :'ios-home-outline' },
  { title: 'Become A Partner', component: BeacomePartnerPage , Icon :'ios-home-outline' },
  { title: 'Contact Us', component: ContactPage , Icon :'ios-home-outline' }

];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
