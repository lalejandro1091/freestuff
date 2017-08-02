import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St7Page } from '../st7/st7';
import { St9Page } from '../st9/st9';

/**
 * Generated class for the St8Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st8',
  templateUrl: 'st8.html',
})
export class St8Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St8Page');
  }

  goSt7(){
    this.navCtrl.push(St7Page);
  }
  goSt9(){
    this.navCtrl.push(St9Page);
  }
}
