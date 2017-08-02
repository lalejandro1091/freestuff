import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St4Page } from '../st4/st4';
import { St6Page } from '../st6/st6';

/**
 * Generated class for the St5Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st5',
  templateUrl: 'st5.html',
})
export class St5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St5Page');
  }
  goSt4(){
    this.navCtrl.push(St4Page);
  }
  goSt6(){
    this.navCtrl.push(St6Page);
  }
}
