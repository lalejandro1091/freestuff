import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RootPage } from '../pages/root/root';
import { PPage } from '../pages/p/p';
import { SeriesPage } from '../pages/series/series';
import { PeliculasPage } from '../pages/peliculas/peliculas';
import { SimpsonPage } from '../pages/simpson/simpson';
import { DragonZPage } from '../pages/dragon-z/dragon-z';
import { St1Page } from '../pages/st1/st1';
import { St2Page } from '../pages/st2/st2';
import { St3Page } from '../pages/st3/st3';
import { St4Page } from '../pages/st4/st4';
import { St5Page } from '../pages/st5/st5';
import { St6Page } from '../pages/st6/st6';
import { St7Page } from '../pages/st7/st7';
import { St8Page } from '../pages/st8/st8';
import { St9Page } from '../pages/st9/st9';
import { St10Page } from '../pages/st10/st10';
import { St11Page } from '../pages/st11/st11';
import { St12Page } from '../pages/st12/st12';
import { St13Page } from '../pages/st13/st13';
import { St14Page } from '../pages/st14/st14';
import { St15Page } from '../pages/st15/st15';
import { St16Page } from '../pages/st16/st16';
import { St17Page } from '../pages/st17/st17';
import { St18Page } from '../pages/st18/st18';
import { St19Page } from '../pages/st19/st19';
import { St20Page } from '../pages/st20/st20';
import { St21Page } from '../pages/st21/st21';
import { St22Page } from '../pages/st22/st22';
import { St23Page } from '../pages/st23/st23';
import { St24Page } from '../pages/st24/st24';
import { St25Page } from '../pages/st25/st25';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RootPage,
    PPage,
    SeriesPage,
    PeliculasPage,
    St1Page,
    SimpsonPage,
    DragonZPage,
    St2Page,
    St3Page,
    St4Page,
    St5Page,
    St6Page,
    St7Page,
    St8Page,
    St9Page,
    St10Page,
    St11Page,
    St12Page,
    St13Page,
    St14Page,
    St15Page,
    St16Page,
    St17Page,
    St18Page,
    St19Page,
    St20Page,
    St21Page,
    St22Page,
    St23Page,
    St24Page,
    St25Page
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RootPage,
    PPage,
    SeriesPage,
    PeliculasPage,
    St1Page,
    SimpsonPage,
    DragonZPage,
    St2Page,
    St3Page,
    St4Page,
    St5Page,
    St6Page,
    St7Page,
    St8Page,
    St9Page,
    St10Page,
    St11Page,
    St12Page,
    St13Page,
    St14Page,
    St15Page,
    St16Page,
    St17Page,
    St18Page,
    St19Page,
    St20Page,
    St21Page,
    St22Page,
    St23Page,
    St24Page,
    St25Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
