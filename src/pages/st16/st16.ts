import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St15Page } from '../st15/st15';
import { St17Page } from '../st17/st17';

/**
 * Generated class for the St16Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st16',
  templateUrl: 'st16.html',
})
export class St16Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St16Page');
  }

  goSt15(){
    this.navCtrl.push(St15Page);
  }
  goSt17(){
    this.navCtrl.push(St17Page);
  }
}
