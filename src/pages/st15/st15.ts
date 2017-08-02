import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { St14Page } from '../st14/st14';
import { St16Page } from '../st16/st16';

/**
 * Generated class for the St15Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st15',
  templateUrl: 'st15.html',
})
export class St15Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St15Page');
  }

  goSt14(){
    this.navCtrl.push(St14Page);
  }
  goSt16(){
    this.navCtrl.push(St16Page);
  }
}
