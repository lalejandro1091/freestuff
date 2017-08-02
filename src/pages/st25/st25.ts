import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St24Page } from '../st24/st24';

/**
 * Generated class for the St25Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st25',
  templateUrl: 'st25.html',
})
export class St25Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St25Page');
  }

  goSt24(){
    this.navCtrl.push(St24Page);
  }

}
