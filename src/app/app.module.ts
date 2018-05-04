import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProjectsPage } from '../pages/projects/projects';
import { WorkbooksPage } from '../pages/workbooks/workbooks';
import { DashboardsPage } from '../pages/dashboards/dashboards';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserAccountPopoverPage } from '../pages/user-account-popover/user-account-popover';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProjectsPage,
    WorkbooksPage,
    DashboardsPage,
    UserAccountPopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProjectsPage,
    WorkbooksPage,
    DashboardsPage,
    UserAccountPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
