import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CategoryPage } from '../pages/category/category';
import { PricePage } from '../pages/price/price';
import { LogoutPage } from '../pages/logout/logout';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PaperPage } from '../pages/paper/paper';
import { PlasticPage } from '../pages/plastic/plastic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { GlobalProvider } from '../providers/global/global';
//import { MenuProvider } from '../providers/menu/menu';

  const config = {
    apiKey: "AIzaSyCvyA8nGIUQ0-omDP11SLJq_N3nndF-cbw",
    authDomain: "reboxit-c3fb2.firebaseapp.com",
    databaseURL: "https://reboxit-c3fb2.firebaseio.com",
    projectId: "reboxit-c3fb2",
    storageBucket: "reboxit-c3fb2.appspot.com",
    messagingSenderId: "405707507293"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CategoryPage,
    LogoutPage,
    PricePage,
    LoginPage,
    SignupPage,
    PaperPage,
    PlasticPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CategoryPage,
    PricePage,
    LogoutPage,
    LoginPage,
    SignupPage,
    PaperPage,
    PlasticPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    //MenuProvider
  ]
})
export class AppModule {}
