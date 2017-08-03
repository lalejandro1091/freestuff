import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DssPage } from '../dss/dss';
import { DsgjPage } from '../dsgj/dsgj';

/**
 * Generated class for the DsfPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dsf',
  templateUrl: 'dsf.html',
})
export class DsfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DsfPage');
  }

  goSs(){
    this.navCtrl.push(DssPage);
  }
  goSgj(){
    this.navCtrl.push(DsgjPage);
  }
}
