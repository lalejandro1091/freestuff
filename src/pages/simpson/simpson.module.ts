import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimpsonPage } from './simpson';

@NgModule({
  declarations: [
    SimpsonPage,
  ],
  imports: [
    IonicPageModule.forChild(SimpsonPage),
  ],
})
export class SimpsonPageModule {}
