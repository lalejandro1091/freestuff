import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { RootPage } from '../root/root';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data: any = {};
  signupPage = SignupPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.data.user = '';
    this.data.pass = '';
    this.http = http;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

    submit() {
  var link = 'http://freestuff.pe.hu/php/login.php';
  var myData = JSON.stringify({user: this.data.user, pass: this.data.pass});
 
  this.http.post(link, myData)
  .subscribe(data => {
  this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
  if(this.data.response == "success"){
    this.navCtrl.setRoot(HomePage);
  }else{
    if(this.data.response == "root"){
      this.navCtrl.setRoot(RootPage);
    }
  }
  }, error => {
  console.log("Oooops!");
  });
  }
}
