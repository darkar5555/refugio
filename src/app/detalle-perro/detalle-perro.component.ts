import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-detalle-perro',
  templateUrl: './detalle-perro.component.html',
  styleUrls: ['./detalle-perro.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetallePerroComponent implements OnInit {
  perros={};
  id= null;
  perro={};
  carousel={};
  constructor(private route: ActivatedRoute, private imageService: ImageService) { 
    console.log(this.route.snapshot.params['id']);
    this.id= this.route.snapshot.params['id'];
    this.perros = imageService.getPerros();
    // console.log(this.buscarPerros());
    this.perro = imageService.buscarPerros(this.id);
    console.log(this.perro);
    console.log('hola');
    this.carousel = imageService.buscarPerrosImages(this.id);
    console.log(this.carousel);
    console.log(this.perros);
  }

  ngOnInit() {
  }


}
