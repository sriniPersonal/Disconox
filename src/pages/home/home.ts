import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PubdetailsPage} from '../pubdetails/pubdetails';
import { ActionSheetController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  iffalse: boolean = true;
  iftrue: boolean = false;

  pubArray : any;
  listCardsAdventure: any;
    constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController, public Platform:Platform ) {
     
      this.pubArray = [
      {
        "id" : 1,
        "pubName" : "Hilife Browery",
        "pubType" : "Pub / Dining",
        "pubImage" : "assets/imgs/party1.jpg"         
      },
      {
        "id" : 2,
        "pubName" : "HardCup Browery",
        "pubType" : "Pub / Drinks",
        "pubImage" : "assets/imgs/party2.jpg"         
      },
      {
        "id" : 3,
        "pubName" : "Club 8",
        "pubType" : "Pub / Dj",
        "pubImage" : "assets/imgs/party3.jpg"         
      },
      {
        "id" : 4,
        "pubName" : "Night Life Browery",
        "pubType" : "Pub / Buffet",
        "pubImage" : "assets/imgs/party4.jpg"         
      }
    ];
    
  }
  expolre (){
    console.log("push");
    this.navCtrl.push(PubdetailsPage);
  }
  
  deals(){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Available Offers / Deals',
      
      buttons: [
        {
          text: 'Deals & Offers',
          handler: () => {
            console.log('Deals & Offers clicked');
            this.navCtrl.push(PubdetailsPage);
          }
        },{
          text: 'Suprise',
          handler: () => {
            console.log('Suprise clicked');
          }
        }
        ,{
          text: 'Guest List',
          handler: () => {
            console.log('Guest clicked');
          }
        }
        ,{
          text: 'Bottle Booking',
          handler: () => {
            console.log('Bottle clicked');
          }
        },{
          text: 'Table Booking',
          handler: () => {
            console.log('Suprise clicked');
          }
        },{
          text: 'packages',
          handler: () => {
            console.log('Suprise clicked');
          }
        },{
          text: 'Entry Ticket Booking',
          handler: () => {
            console.log('Suprise clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
}
ionViewDidLoad() {
  console.log('ionViewDidLoad GalleryPage');
  this.iffalse = true;
  this.iftrue = false;
}
addfav(){
  this.iffalse = false;
  this.iftrue = true;
}
removefav(){
  console.log("pause");
  this.iffalse = true;
  this.iftrue = false;
}
}
