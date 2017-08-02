import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St17Page } from '../st17/st17';
import { St19Page } from '../st19/st19';

/**
 * Generated class for the St18Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st18',
  templateUrl: 'st18.html',
})
export class St18Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St18Page');
  }

  goSt17(){
    this.navCtrl.push(St17Page);
  }
  goSt19(){
    this.navCtrl.push(St19Page);
  }
}
