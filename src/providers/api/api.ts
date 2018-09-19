import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  // baseUrl: string = 'https://swapi.co/api/films';
  baseUrl: string = "http://disconox.com.fozzyhost.com/v1/InnoChat//";
  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  //common headers for api calls.
  preareHeader() {
    let options = {
      'Content-Type': 'application/json'
    }
    return options;
  }

  login(requestbody):any {
    let otpUrl = this.baseUrl + "login";
    return new Promise((resolve, reject) => {
      this.http.post(otpUrl, requestbody, {
        headers: this.preareHeader()
      })
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    })
  }
  register(requestbody):any {
    let otpUrl = this.baseUrl + "registration";
    return new Promise((resolve, reject) => {
      this.http.post(otpUrl, requestbody, {
        headers: this.preareHeader()
      })
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    })
  }

  //send otp:

/*   sendOtp(mobileNUmber) {
    let requestbody = { "mobile": mobileNUmber };
    //  requestbody=
    // let requestbody="&mobile=" + '7760032653';
    let otpUrl = this.baseUrl + "SendOTP";
    return new Promise((resolve, reject) => {
      this.http.post(otpUrl, requestbody, {
        headers: this.preareHeader()
      })
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    })
  }
 */  /* //get request example
  getFilms() {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  } */
  /*  //post request example
   getHomeSections(data) {
     return new Promise((resolve, reject) => {
       this.http.post(this.baseUrl, data,{
         headers:this.preareHeader()
       })
       .subscribe(res => {
         resolve(res);
       }, err => {
         reject(err);
       });
     })
   } */

}


