import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProjectsPage } from '../pages/projects/projects';
import { WorkbooksPage } from '../pages/workbooks/workbooks';
import { DashboardsPage } from '../pages/dashboards/dashboards';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserAccountPopoverPage } from '../pages/user-account-popover/user-account-popover';
import { PropertyViewerPage } from '../pages/property-viewer/property-viewer';
// import { FilterPipe } from '../app/pipes/pipes';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    ProjectsPage,
    WorkbooksPage,
    DashboardsPage,
    UserAccountPopoverPage,
    PropertyViewerPage,
    // FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjectsPage,
    WorkbooksPage,
    DashboardsPage,
    UserAccountPopoverPage,
    PropertyViewerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider
  ]
})
export class AppModule { }
