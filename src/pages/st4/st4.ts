import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St3Page } from '../st3/st3';
import { St5Page } from '../st5/st5';

/**
 * Generated class for the St4Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st4',
  templateUrl: 'st4.html',
})
export class St4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St4Page');
  }
  goSt3(){
    this.navCtrl.push(St3Page);
  }
  goSt5(){
    this.navCtrl.push(St5Page);
  }
}
