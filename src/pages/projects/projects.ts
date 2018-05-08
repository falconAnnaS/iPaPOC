import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { UserAccountPopoverPage } from '../user-account-popover/user-account-popover';
// import { FilterPipe } from '../../app/pipes/pipes';
import { RestProvider } from '../../providers/rest/rest';



@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  items: string[];
  projects: Object[];
  project: Object;
  allProjects: Object[];
  switch_views: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public restProvider: RestProvider) {
    this.getAllProjects();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

  getItems(ev: any) {
    this.projects = this.allProjects;
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.projects = this.projects.filter((project) => {
        return (JSON.stringify(project).toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getAllProjects() {
    this.restProvider.getAllProjects()
      .then(data => {
        this.projects = data["project"];
        this.allProjects = data["project"];
      });
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(UserAccountPopoverPage, {}, { cssClass: 'contact-popover', enableBackdropDismiss: true });
    popover.present({
      ev: myEvent
    });
  }

  switchToTilesView() {
    this.switch_views = "tiles_case";
  }
  switchToListView() {
    this.switch_views = "list_case";
  }

}
