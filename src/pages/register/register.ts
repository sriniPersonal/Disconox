import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController
} from 'ionic-angular';
import {
  ApiProvider
} from '../../providers/api/api';


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
  username: string;
  email: string;
  mobile: string;
  password: string;
  confirmpass: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public loading: LoadingController, private apiProvider: ApiProvider) {}

  doRegister() {
    let loader = this.loading.create({
      content: 'loading...',
    });
    loader.present().then(() => {
      var requestbody;
      var response;
      requestbody = {
        clientId: "x6DmrbsQFZyUUiggs0BZ",
        name: this.username,
        password: this.password,
        phone: this.mobile,
        email: this.email,
        address:"",
        image:"",
        role:3,
        venue_name: "",
        street_name: "",
        city: "",
        state: "",
          location:""
      };
      this.apiProvider.register(requestbody)
        .then(data => {
          // let responseBody = data["_body"];
          // response = JSON.parse(responseBody);
          if (!data.error) {
            loader.dismiss();
            this.showAlert(data.message);

          } else {
            loader.dismiss();
            this.showAlert(data.message);
          }
        }).catch(err => {
          console.log(err);
          loader.dismiss();
          this.showAlert("something went  wrong please try again");
        });
    });

  }
  showAlert(msg) {
    const alert = this.alertCtrl.create({
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }




  // this.data = {
  //   "clientId":"x6DmrbsQFZyUUiggs0BZ",
  //   "name":this.username,
  //   "password":this.password,
  //   "phone": this.mobile,
  //   "email": this.email,
  //   "address":"",
  //   "image":"",
  //   "role":3,
  //   "venue_name": "",
  //   "street_name": "",
  //   "city": "",
  //   "state": "",
  //     "location":""
  // };

  //    let url = "http://disconox.com.fozzyhost.com/v1/InnoChat//registration";
  //   // let headers = new Headers();
  //   // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  //   // headers.append('Accept','application/json');
  //   // headers.append('content-type','application/json');
  //   //   let options = new RequestOptions({ headers:headers});
  //   return new Promise((resolve,reject)=>{
  //      this.http.post(url,JSON.stringify(this.data)).subscribe(res => {
  //         resolve(res.json());
  //         console.log(res);
  //         let alert = this.alertCtrl.create({
  //           title: 'Disconox',
  //           subTitle: "Success",
  //           buttons: ['Ok']
  //         });
  //         alert.present();
  //       }, (err) => {
  //         reject(err);
  //       });
  //   })
  // }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad RegisterPage');
  // }

}
