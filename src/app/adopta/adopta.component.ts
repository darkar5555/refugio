import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-adopta',
  templateUrl: './adopta.component.html',
  styleUrls: ['./adopta.component.css']
})
export class AdoptaComponent implements OnInit {
  perros={};
  constructor(private imageService: ImageService) { 
    this.perros = imageService.getPerros();
  }

  
  ngOnInit() {
  }

}


