import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DssPage } from '../dss/dss';
import { DsfPage } from '../dsf/dsf';
import { DsgjPage } from '../dsgj/dsgj';
import { DsaPage } from '../dsa/dsa';
import { DsmbPage } from '../dsmb/dsmb';
import { DeoPage } from '../deo/deo';
import { DPeliculasPage } from '../d-peliculas/d-peliculas';

/**
 * Generated class for the DragonZPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dragon-z',
  templateUrl: 'dragon-z.html',
})
export class DragonZPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DragonZPage');
  }

  goSs(){
    this.navCtrl.push(DssPage);
  }
  goSf(){
    this.navCtrl.push(DsfPage);
  }
  goSgj(){
    this.navCtrl.push(DsgjPage);
  }
  goSa(){
    this.navCtrl.push(DsaPage);
  }
  goSmb(){
    this.navCtrl.push(DsmbPage);
  }
  goEo(){
    this.navCtrl.push(DeoPage);
  }
  goDpeliculas(){
    this.navCtrl.push(DPeliculasPage);
  }
}
