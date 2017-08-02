import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St21Page } from '../st21/st21';
import { St23Page } from '../st23/st23';

/**
 * Generated class for the St22Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st22',
  templateUrl: 'st22.html',
})
export class St22Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St22Page');
  }

  goSt21(){
    this.navCtrl.push(St21Page);
  }
  goSt23(){
    this.navCtrl.push(St23Page);
  }
}
