import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  api: string;
  myData: Array<any>;
  // constructor (private http: Http){
  //   this.api = 'http://jsonplaceholder.typicode.com/photos';
  //   this.http.get(this.api)
  //     .map(response => response.json())
  //     .subscribe(res => this.myData = res);
  // }
}
