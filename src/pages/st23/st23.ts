import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St22Page } from '../st22/st22';
import { St24Page } from '../st24/st24';

/**
 * Generated class for the St23Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st23',
  templateUrl: 'st23.html',
})
export class St23Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St23Page');
  }

  goSt22(){
    this.navCtrl.push(St22Page);
  }
  goSt24(){
    this.navCtrl.push(St24Page);
  }
}
