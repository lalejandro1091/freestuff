import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St2Page } from '../st2/st2';
import { St4Page } from '../st4/st4';

/**
 * Generated class for the St3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st3',
  templateUrl: 'st3.html',
})
export class St3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St3Page');
  }
  goSt2(){
    this.navCtrl.push(St2Page);
  }
  goSt4(){
    this.navCtrl.push(St4Page);
  }
}
