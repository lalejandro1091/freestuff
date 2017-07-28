import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PPage } from '../p/p';
import { SeriesPage } from '../series/series';
import { PeliculasPage } from '../peliculas/peliculas';

/**
 * Generated class for the RootPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-root',
  templateUrl: 'root.html',
})
export class RootPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RootPage');
  }
  goP(){
    this.navCtrl.push(PPage);
  }
  goSeries(){
    this.navCtrl.push(SeriesPage);
  }
  goPeliculas(){
    this.navCtrl.push(PeliculasPage);
  }
}
