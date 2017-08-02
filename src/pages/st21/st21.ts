import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St20Page } from '../st20/st20';
import { St22Page } from '../st22/st22';

/**
 * Generated class for the St21Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st21',
  templateUrl: 'st21.html',
})
export class St21Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St21Page');
  }

  goSt20(){
    this.navCtrl.push(St20Page);
  }
  goSt22(){
    this.navCtrl.push(St22Page);
  }
}
