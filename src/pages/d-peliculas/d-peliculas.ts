import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeoPage } from '../deo/deo';

/**
 * Generated class for the DPeliculasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-d-peliculas',
  templateUrl: 'd-peliculas.html',
})
export class DPeliculasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DPeliculasPage');
  }

  goEo(){
    this.navCtrl.push(DeoPage);
  }
}
