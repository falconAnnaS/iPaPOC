import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyViewerPage } from './property-viewer';

@NgModule({
  declarations: [
    PropertyViewerPage,
  ],
  imports: [
    IonicPageModule.forChild(PropertyViewerPage),
  ],
})
export class PropertyViewerPageModule {}
