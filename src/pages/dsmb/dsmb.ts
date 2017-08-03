import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DsaPage } from '../dsa/dsa';
import { DeoPage } from '../deo/deo';

/**
 * Generated class for the DsmbPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dsmb',
  templateUrl: 'dsmb.html',
})
export class DsmbPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DsmbPage');
  }

  goSa(){
    this.navCtrl.push(DsaPage);
  }
  goEo(){
    this.navCtrl.push(DeoPage);
  }
}
