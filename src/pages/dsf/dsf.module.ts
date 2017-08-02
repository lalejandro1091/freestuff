import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DsfPage } from './dsf';

@NgModule({
  declarations: [
    DsfPage,
  ],
  imports: [
    IonicPageModule.forChild(DsfPage),
  ],
})
export class DsfPageModule {}
