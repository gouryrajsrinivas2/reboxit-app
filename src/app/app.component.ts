import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CategoryPage } from '../pages/category/category';
import { PricePage } from '../pages/price/price';
import { LogoutPage } from '../pages/logout/logout';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PaperPage } from '../pages/paper/paper';
import { PlasticPage } from '../pages/plastic/plastic';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  //pages: Array<{icon: string,title: string, component: any}>;
    pages: any;

  // Selected Side Menu
  selectedMenu: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public menuCtrl: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon:'person',title: 'My Profile', component: HomePage },
      { icon: 'calendar',title: 'Book a pickup', component: ListPage },
      { icon:'pricetags',title:'Price List', component: PricePage },
          {
      icon:'albums',
      title: 'Categories',
      subPages: [{
        title: 'Paper',
        component: PaperPage,
      }, {
        title: 'Plastic',
        component: PlasticPage,
      }]
    },
      { icon:'log-out',title:'Logout', component: LogoutPage },
      { icon:'bookmarks',title:'Terms & Conditions', component: LogoutPage }

  ];
}

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.getSideMenuData();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

    /*getSideMenuData() {
    this.pages = this.menuProvider.getSideMenus();
  }*/

  /*openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }*/
    openPage(page, index) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component) {
      this.nav.setRoot(page.component);
      this.menuCtrl.close();
    } else {
      if (this.selectedMenu) {
        this.selectedMenu = 0;
      } else {
        this.selectedMenu = index;
      }
    }
  }
}
