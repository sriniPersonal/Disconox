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
  RegisterPage
} from '../register/register';
import {
  HomePage
} from '../home/home';
import {
  ApiProvider
} from '../../providers/api/api';
import {
  SharedPreferences
} from '../../helper/preferences';

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
  data: any = {};
  email: string;
  password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public loading: LoadingController, private apiProvider: ApiProvider, private preferences: SharedPreferences) {}

  login() {
    if (this.email == undefined || this.email == '') {
      this.showAlert("Please enter Email id");
    } else if (this.password == undefined || this.password == '') {
      this.showAlert("Please enter Password");
    } else {
      let loader = this.loading.create({
        content: 'loading...',
      });
      loader.present().then(() => {
        var requestbody;
        var response;
        requestbody = {
          clientId: "x6DmrbsQFZyUUiggs0BZ",
          email: this.email,
          password: this.password
        };
        this.apiProvider.login(requestbody)
          .then(data => {
            // let responseBody = data["_body"];
            // response = JSON.parse(responseBody);
            if (!data.error) {
              loader.dismiss();
              this.showAlert(data.message);
              this.preferences.saveData("userData", JSON.stringify(data.UserDetails));
              this.preferences.getData("userData").then(result => {
                let userData = JSON.parse(result);
                console.log(userData);
              }, err => {
                console.log("error :" + err);
              });
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
  }
  showAlert(msg) {
    const alert = this.alertCtrl.create({
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  /* login() {
    this.data = {
      clientId: "x6DmrbsQFZyUUiggs0BZ",
      email: "hemaone@gmail.com",
      password: "test123"
    };

    console.log("yy");
    let url = "http://disconox.com.fozzyhost.com/v1/InnoChat//registration";
    // let headers = new Headers();
    // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    // headers.append('Accept','application/json');
    // headers.append('content-type','application/json');
    //   let options = new RequestOptions({ headers:headers});
    return new Promise((resolve, reject) => {
      this.http.post(url, JSON.stringify(this.data)).subscribe(res => {
        resolve(res.json());
        console.log(res);
      }, (err) => {
        reject(err);
      });
    })
  } */
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  register() {
    this.navCtrl.push(RegisterPage);
  }
  goHome() {
    this.navCtrl.push(HomePage);
  }
}
