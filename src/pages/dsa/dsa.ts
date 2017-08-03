import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DsgjPage } from '../dsgj/dsgj';
import { DsmbPage } from '../dsmb/dsmb';

/**
 * Generated class for the DsaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dsa',
  templateUrl: 'dsa.html',
})
export class DsaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DsaPage');
  }

  goSgj(){
    this.navCtrl.push(DsgjPage);
  }
  goSmb(){
    this.navCtrl.push(DsmbPage);
  }
}
