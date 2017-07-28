import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { P1Page } from '../p1/p1';
import { P3Page } from '../p3/p3';

/**
 * Generated class for the P2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p2',
  templateUrl: 'p2.html',
})
export class P2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P2Page');
  }
  goP1(){
    this.navCtrl.push(P1Page);
  }
  goP3(){
    this.navCtrl.push(P3Page);
  }
}
