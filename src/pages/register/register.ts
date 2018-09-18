import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http} from '@angular/http';
import { AlertController } from 'ionic-angular';



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:  Http,private alertCtrl: AlertController) {
  }

  doRegister(){
  this.data = {
    "clientId":"x6DmrbsQFZyUUiggs0BZ",
    "name":"NareshBojja",
    "password":"mobile",
    "phone":"121212122",
    "email":"naresh34@gmail.com",
    "address":"",
    "image":"",
    "role":3,
    "venue_name": "",
    "street_name": "",
    "city": "",
    "state": "",
      "location":""
  };

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
          let alert = this.alertCtrl.create({
            title: 'Disconox',
            subTitle: "Success",
            buttons: ['Ok']
          });
          alert.present();
        }, (err) => {
          reject(err);
        });
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
