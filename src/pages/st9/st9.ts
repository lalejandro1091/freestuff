import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St8Page } from '../st8/st8';
import { St10Page } from '../st10/st10';

/**
 * Generated class for the St9Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st9',
  templateUrl: 'st9.html',
})
export class St9Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St9Page');
  }

  goSt8(){
    this.navCtrl.push(St8Page);
  }
  goSt10(){
    this.navCtrl.push(St10Page);
  }
}
