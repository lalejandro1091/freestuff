import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SimpsonPage } from '../simpson/simpson';
import { DragonZPage } from '../dragon-z/dragon-z';


/**
 * Generated class for the SeriesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeriesPage');
  }
  goS(){
    this.navCtrl.push(SimpsonPage);
  }
  goD(){
    this.navCtrl.push(DragonZPage);
  }
}
