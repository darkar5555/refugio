import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  visible = true;
  constructor() { }

  ngOnInit() {
  }
  toggleDiv(){
    this.visible=true;
  }
  toggleDivFalse(){
    this.visible=true;
  }

}
