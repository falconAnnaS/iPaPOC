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

  // searchQuery: string = '';
  items: string[];
  projects: Object[];
  project: Object;
  allProjects: Object[];
  //projectsList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public restProvider: RestProvider) {
    //  this.initializeProjects();
    this.getAllProjects();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

  // initializeProjects() {
  //   this.projects = [
  //     {
  //       "id": "9f174622-7833-4aa5-8f67-43e6e31291e7",
  //       "name": "Default",
  //       "description": "The default project that was automatically created by Tableau.",
  //       "contentPermissions": "LockedToProject"
  //     },
  //     {
  //       "id": "0a507059-6e60-4865-8243-9cf999fde4fa",
  //       "name": "Lease Administration Dashboards",
  //       "description": "",
  //       "contentPermissions": "LockedToProject"
  //     },
  //     {
  //       "id": "468dc2f2-c8da-4857-86c3-1d9e4748873d",
  //       "name": "Accounts Operation Review",
  //       "description": "",
  //       "contentPermissions": "LockedToProject"
  //     },
  //     {
  //       "id": "1048b317-fa8c-4f44-b302-e8d83ce02813",
  //       "name": "DEMO",
  //       "description": "",
  //       "contentPermissions": "ManagedByOwner"
  //     },
  //     {
  //       "id": "dc17481d-76be-4de8-b57a-1e39baca0667",
  //       "name": "Workplace Analytics DEMO",
  //       "description": "",
  //       "contentPermissions": "LockedToProject"
  //     },
  //     {
  //       "id": "2da29d65-5455-46cd-bc38-e2e3a55d0c38",
  //       "name": "IPS Dashboards",
  //       "description": "",
  //       "contentPermissions": "LockedToProject"
  //     },
  //     {
  //       "id": "d4b56381-0ccb-4f5f-be27-fa73afd70669",
  //       "name": "Verizon Demo",
  //       "description": "",
  //       "contentPermissions": "LockedToProject"
  //     },
  //     {
  //       "id": "8872564c-a3a1-4fcf-a489-1486abe29dbd",
  //       "name": "Deutsche Bank Demo",
  //       "description": "",
  //       "contentPermissions": "LockedToProject"
  //     },
  //     {
  //       "id": "fb77113f-be52-4d1b-bea5-6d645b66af3f",
  //       "name": "CSC Demo",
  //       "description": "",
  //       "contentPermissions": "ManagedByOwner"
  //     },
  //     {
  //       "id": "98259e02-86bd-41e2-94a8-eb7fb7cfd169",
  //       "name": "Kimberly Clark Demo",
  //       "description": "",
  //       "contentPermissions": "LockedToProject"
  //     },
  //     {
  //       "id": "321a550e-8c89-4958-bdf2-98a0fcc082d8",
  //       "name": "Tetra Pak",
  //       "description": "",
  //       "contentPermissions": "LockedToProject"
  //     },
  //     {
  //       "id": "4ca929e6-cd98-405d-b5a5-b381b5dbdfc6",
  //       "name": "Market Demo",
  //       "description": "",
  //       "contentPermissions": "LockedToProject"
  //     },
  //     {
  //       "id": "a647d198-f59f-4011-8290-e23ff9e4a563",
  //       "name": "Swipe Cards PoC",
  //       "description": "",
  //       "contentPermissions": "ManagedByOwner"
  //     },
  //     {
  //       "id": "85551e06-2bc7-4865-8929-3bb07566c44e",
  //       "name": "Delta",
  //       "description": "",
  //       "contentPermissions": "LockedToProject"
  //     }
  //   ];
  // }

  getItems(ev: any) {
    this.projects = this.allProjects;
    console.log(this.allProjects);
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

}
