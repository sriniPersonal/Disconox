import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PubdetailsPage } from '../pages/pubdetails/pubdetails';
import {GalleryPage} from '../pages/gallery/gallery';
import {FaqPage} from '../pages/faq/faq';
import {AboutPage} from '../pages/about/about';
import {LoginPage} from '../pages/login/login';
import {BeacomePartnerPage} from '../pages/beacome-partner/beacome-partner';
import { TermsOfUsePage} from '../pages/terms-of-use/terms-of-use';
import { ContactPage} from '../pages/contact/contact';
import { RegisterPage} from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParallaxHeaderDirective } from '../directives/parallax-header/parallax-header';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,PubdetailsPage,GalleryPage,FaqPage,ContactPage,TermsOfUsePage,LoginPage,RegisterPage,AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,PubdetailsPage,GalleryPage,FaqPage,ContactPage,TermsOfUsePage,LoginPage,RegisterPage,AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,LaunchNavigator,CallNumber,EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
