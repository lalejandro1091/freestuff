import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St16Page } from '../st16/st16';
import { St18Page } from '../st18/st18';

/**
 * Generated class for the St17Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st17',
  templateUrl: 'st17.html',
})
export class St17Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St17Page');
  }

  goSt16(){
    this.navCtrl.push(St16Page);
  }
  goSt18(){
    this.navCtrl.push(St18Page);
  }
}
