import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { P1Page } from '../p1/p1';
import { P2Page } from '../p2/p2';
import { P3Page } from '../p3/p3';

/**
 * Generated class for the PPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p',
  templateUrl: 'p.html',
})
export class PPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PPage');
  }
  goP1(){
    this.navCtrl.push(P1Page);
  }
  goP2(){
    this.navCtrl.push(P2Page);
  }
  goP3(){
    this.navCtrl.push(P3Page);
  }
}
