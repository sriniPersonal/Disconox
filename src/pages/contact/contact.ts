import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public callNumber: CallNumber,public emailComposer: EmailComposer) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  doEmail(){
    console.log("mail clicked");
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
     
     let email = {
       to: 'connect@disconox.com',
       cc: 'naresh.bojja001@gmail.com',
       subject: 'Request for contact',
       body: 'How are you? Nice greetings from Naresh',
       isHtml: true
     };
     
     // Send a text message using default options
     this.emailComposer.open(email); 
  }
  doCall(){
    console.log("call clicked");
    this.callNumber.callNumber("8712379795", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

}
