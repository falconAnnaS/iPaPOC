import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  //apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  projectsUrl = 'http://localhost:3000/projects';

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  getAllProjects() {
    return new Promise(resolve => {
      this.http.get(this.projectsUrl).subscribe(data => {
        resolve(data);
        //console.log("data is: " + data);
      }, err => {
        console.log(err);
      });
    });
  }

  addProject(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.projectsUrl, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
