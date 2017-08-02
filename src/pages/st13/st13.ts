import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St12Page } from '../st12/st12';
import { St14Page } from '../st14/st14';

/**
 * Generated class for the St13Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st13',
  templateUrl: 'st13.html',
})
export class St13Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St13Page');
  }

  goSt12(){
    this.navCtrl.push(St12Page);
  }
  goSt14(){
    this.navCtrl.push(St14Page);
  }
}
