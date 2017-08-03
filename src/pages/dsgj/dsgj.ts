import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DsfPage } from '../dsf/dsf';
import { DsaPage } from '../dsa/dsa';

/**
 * Generated class for the DsgjPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dsgj',
  templateUrl: 'dsgj.html',
})
export class DsgjPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DsgjPage');
  }

  goSf(){
    this.navCtrl.push(DsfPage);
  }
  goSa(){
    this.navCtrl.push(DsaPage);
  }
}
