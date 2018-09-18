import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from'../register/register';
import { HomePage} from '../home/home';
import { Http} from '@angular/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  signInForm = {}
  data : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
   // this.data = {username : 'xxx',password:'yyyy' };


  }
  
  
  login(){
    this.data = {clientId:"x6DmrbsQFZyUUiggs0BZ",
  email:"hemaone@gmail.com",
  password:"test123"};

    console.log("yy");
     let url = "http://disconox.com.fozzyhost.com/v1/InnoChat//registration";
    // let headers = new Headers();
    // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    // headers.append('Accept','application/json');
    // headers.append('content-type','application/json');
    //   let options = new RequestOptions({ headers:headers});
    return new Promise((resolve,reject)=>{
       this.http.post(url,JSON.stringify(this.data)).subscribe(res => {
          resolve(res.json());
          console.log(res);
        }, (err) => {
          reject(err);
        });
    })
  }  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }
  goHome(){
    this.navCtrl.push(HomePage);
  }
   

}
