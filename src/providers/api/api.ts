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
  baseUrl: string = "https://api.coalmountains.in/api/"

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  //common headers for api calls.
  preareHeader() {
    /*   let options={
        "AuthenticationToken":"ff9cdf16-aa5e-4623-b1f7-ed66fbb75172",
        "AppSource":"android_2.1.7",
        "UserId":"2",
        "MobileLanguage":"1"
      } */
    let options = {
      'Content-Type': 'application/x-www-form-urlencoded'
    // 'Content-Type': 'application/json'
    }
    return options;
  }

    //send otp:

  sendOtp(mobileNUmber) {
    let requestbody = {"mobile": mobileNUmber};

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
  /* //get request example
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

   getRestaurents(data){
      let url = this.baseUrl + "GetRestaurants";
      return new Promise((resolve, reject) => {
        this.http.post(url, data, {
          headers: this.preareHeader()
        })
          .subscribe(res => {
            resolve(res);
          }, err => {
            reject(err);
          });
      })
   }

   getRestaurentDetails(data){
    let url = this.baseUrl + "GetRestaurantCategoryItems ";
    return new Promise((resolve, reject) => {
      this.http.post(url, data, {
        headers: this.preareHeader()
      })
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    })
 }

}


