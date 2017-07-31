import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St2Page } from '../st2/st2';

/**
 * Generated class for the St1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st1',
  templateUrl: 'st1.html',
})
export class St1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St1Page');
  }

  goSt2(){
    this.navCtrl.push(St2Page);
  }
}
