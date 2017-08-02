import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St13Page } from '../st13/st13';
import { St15Page } from '../st15/st15';

/**
 * Generated class for the St14Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st14',
  templateUrl: 'st14.html',
})
export class St14Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St14Page');
  }

  goSt13(){
    this.navCtrl.push(St13Page);
  }
  goSt15(){
    this.navCtrl.push(St15Page);
  }
}
