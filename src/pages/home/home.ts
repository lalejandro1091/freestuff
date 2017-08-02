import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SeriesPage } from '../series/series';
import { PeliculasPage } from '../peliculas/peliculas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goSeries(){
    this.navCtrl.push(SeriesPage);
  }
  goPeliculas(){
    this.navCtrl.push(PeliculasPage);
  }
}
