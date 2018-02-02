import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  lat: number = -16.3908516;
  lng: number = -71.5435397;
  constructor() { }

  ngOnInit() {
  }

}
