import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St9Page } from '../st9/st9';
import { St11Page } from '../st11/st11';

/**
 * Generated class for the St10Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st10',
  templateUrl: 'st10.html',
})
export class St10Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St10Page');
  }

  goSt9(){
    this.navCtrl.push(St9Page);
  }
  goSt11(){
    this.navCtrl.push(St11Page);
  }
}
