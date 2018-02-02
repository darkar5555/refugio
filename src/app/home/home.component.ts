import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  perros: any = {};
  constructor(private imageService: ImageService ) {
    this.perros = this.imageService.getPerros();
   }

  ngOnInit() {
  }

}
