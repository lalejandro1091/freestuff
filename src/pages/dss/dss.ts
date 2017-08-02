import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DsfPage } from '../dsf/dsf';

/**
 * Generated class for the DssPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dss',
  templateUrl: 'dss.html',
})
export class DssPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DssPage');
  }

  goSf(){
    this.navCtrl.push(DsfPage);
  }
}
