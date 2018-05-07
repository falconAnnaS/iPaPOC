import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAccountPopoverPage } from './user-account-popover';

@NgModule({
  declarations: [
    UserAccountPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(UserAccountPopoverPage),
  ],
})
export class UserAccountPopoverPageModule {}
