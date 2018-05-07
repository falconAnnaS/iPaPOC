import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardsPage } from './dashboards';

@NgModule({
  declarations: [
    DashboardsPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardsPage),
  ],
})
export class DashboardsPageModule {}
