import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St6Page } from '../st6/st6';
import { St8Page } from '../st8/st8';

/**
 * Generated class for the St7Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st7',
  templateUrl: 'st7.html',
})
export class St7Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St7Page');
  }

  goSt6(){
    this.navCtrl.push(St6Page);
  }
  goSt8(){
    this.navCtrl.push(St8Page);
  }
}
