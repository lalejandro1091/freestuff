import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { P2Page } from '../p2/p2';

/**
 * Generated class for the P1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p1',
  templateUrl: 'p1.html',
})
export class P1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P1Page');
  }
  goP2(){
    this.navCtrl.push(P2Page);
  }
}
