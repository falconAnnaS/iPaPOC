import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkbooksPage } from './workbooks';

@NgModule({
  declarations: [
    WorkbooksPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkbooksPage),
  ],
})
export class WorkbooksPageModule {}
