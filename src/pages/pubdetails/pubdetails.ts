import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GalleryPage} from '../gallery/gallery'
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

/**
 * Generated class for the PubdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pubdetails',
  templateUrl: 'pubdetails.html',
})
export class PubdetailsPage {
  listCardsAdventure :any;
  latitude: any;
  longitude: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public launchNavigator: LaunchNavigator) {
   
  }
  navigateLocation(){
    // console.log("yes");
    // this.launchNavigator.navigate([17.4728, 78.3728]);
    let destination = 17.4728 + ',' + 78.3728;
    let label = encodeURI('My Label');
    window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
 }
  // navigate(): void{
  //   this.launchNavigator.navigate('Toronto', {start: 'Rome'})
  //   .then(
  //   success => console.log('Launched navigator'),
  //   error => console.log('Error launching navigator', error)
  //   );
  //   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PubdetailsPage');
  }

  photos(){
    this.navCtrl.push(GalleryPage);
    
  }

}
  