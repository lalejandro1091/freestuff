import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St1Page } from '../st1/st1';
import { St3Page } from '../st3/st3';

/**
 * Generated class for the St2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st2',
  templateUrl: 'st2.html',
})
export class St2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St2Page');
  }

  goSt1(){
    this.navCtrl.push(St1Page);
  }
  goSt3(){
    this.navCtrl.push(St3Page);
  }
}
