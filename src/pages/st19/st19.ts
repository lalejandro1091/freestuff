import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St18Page } from '../st18/st18';
import { St20Page } from '../st20/st20';

/**
 * Generated class for the St19Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st19',
  templateUrl: 'st19.html',
})
export class St19Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St19Page');
  }

  goSt18(){
    this.navCtrl.push(St18Page);
  }
  goSt20(){
    this.navCtrl.push(St20Page);
  }
}
