import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St19Page } from '../st19/st19';
import { St21Page } from '../st21/st21';

/**
 * Generated class for the St20Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st20',
  templateUrl: 'st20.html',
})
export class St20Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St20Page');
  }

  goSt19(){
    this.navCtrl.push(St19Page);
  }
  goSt21(){
    this.navCtrl.push(St21Page);
  }
}
