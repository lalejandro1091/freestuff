import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DPeliculasPage } from './d-peliculas';

@NgModule({
  declarations: [
    DPeliculasPage,
  ],
  imports: [
    IonicPageModule.forChild(DPeliculasPage),
  ],
})
export class DPeliculasPageModule {}
