import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St23Page } from '../st23/st23';
import { St25Page } from '../st25/st25';

/**
 * Generated class for the St24Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st24',
  templateUrl: 'st24.html',
})
export class St24Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St24Page');
  }

  goSt23(){
    this.navCtrl.push(St23Page);
  }
  goSt25(){
    this.navCtrl.push(St25Page);
  }
}
