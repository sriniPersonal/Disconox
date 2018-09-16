import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PubdetailsPage } from '../pages/pubdetails/pubdetails';
import {GalleryPage} from '../pages/gallery/gallery';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParallaxHeaderDirective } from '../directives/parallax-header/parallax-header';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { SharedPreferences } from '../helper/preferences';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,PubdetailsPage,GalleryPage,ParallaxHeaderDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,PubdetailsPage,GalleryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    SharedPreferences
  ]
})
export class AppModule {}
