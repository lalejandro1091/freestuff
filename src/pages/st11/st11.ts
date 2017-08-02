import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St10Page } from '../st10/st10';
import { St12Page } from '../st12/st12';

/**
 * Generated class for the St11Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st11',
  templateUrl: 'st11.html',
})
export class St11Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St11Page');
  }

  goSt10(){
    this.navCtrl.push(St10Page);
  }
  goSt12(){
    this.navCtrl.push(St12Page);
  }
}
