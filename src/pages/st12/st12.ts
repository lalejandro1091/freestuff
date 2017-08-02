import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St11Page } from '../st11/st11';
import { St13Page } from '../st13/st13';

/**
 * Generated class for the St12Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st12',
  templateUrl: 'st12.html',
})
export class St12Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St12Page');
  }

  goSt11(){
    this.navCtrl.push(St11Page);
  }
  goSt13(){
    this.navCtrl.push(St13Page);
  }
}
