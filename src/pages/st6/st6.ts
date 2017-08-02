import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St5Page } from '../st5/st5';
import { St7Page } from '../st7/st7';

/**
 * Generated class for the St6Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st6',
  templateUrl: 'st6.html',
})
export class St6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St6Page');
  }
  goSt5(){
    this.navCtrl.push(St5Page);
  }
  goSt7(){
    this.navCtrl.push(St7Page);
  }
}
