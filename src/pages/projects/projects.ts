import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { UserAccountPopoverPage } from '../user-account-popover/user-account-popover';
/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

  initializeItems() {
    this.items = [
      'Amazon',
      'Allegro',
      'IBM',
      'Loreal',
      'HP',
      'GE'
    ];
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(UserAccountPopoverPage, {}, { cssClass: 'contact-popover', enableBackdropDismiss: true });
    popover.present({
      ev: myEvent
    });
  }

}
