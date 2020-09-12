import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = -1;
  public selectedList = -1;

  public camions = [
    {
      title: 'BELAZ 75180',
      url: '/folder/belaz'
    },
    {
      title: 'KOMATSU 730 E ',
      url: '/folder/komatsu'
    }
  ];

  public machines = [
    {
      title: 'Chargeuse 994 H',
      url: '/folder/chargeuse'
    }
  ];

  public bulldozer  = [
    {
      title: 'D11',
      url: '/folder/bulldozer'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    /* if (path !== undefined) {
      this.selectedIndex = this.camions.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    } */
  }
}
