import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the UserAccountPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-user-account-popover',
  template: `
  <ion-list class="myAccountList">
    <ion-list-header>My account</ion-list-header>
    <button ion-item (click)="close()">My Content</button>
    <button ion-item (click)="close()">My Account Settings</button>
    <button ion-item (click)="close()">Make This My Start Page</button>
  </ion-list>
`
})
export class UserAccountPopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  close() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAccountPopoverPage');
  }

}
