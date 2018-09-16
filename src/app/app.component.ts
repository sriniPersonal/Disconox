import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

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
 
  { title: 'Login', component: HomePage, Icon :'ios-home-outline' },
  { title: 'Search Details', component: ListPage , Icon :'ios-home-outline' },
  { title: 'Book A Cab', component: HomePage , Icon : 'ios-home-outline'},
  { title: 'Notifications', component: HomePage , Icon : 'ios-home-outline' },
  { title: "FAQ's", component: HomePage , Icon : 'ios-home-outline'},
  { title: 'About Us', component: HomePage , Icon :'ios-home-outline' },
  { title: 'Become A Partner', component: HomePage , Icon :'ios-home-outline' },
  { title: 'Contact Us', component: HomePage , Icon :'ios-home-outline' }

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
