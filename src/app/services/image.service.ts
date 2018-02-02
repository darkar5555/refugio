import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  perros: any =[
    {"id":1, "nombre": "pelusa", "edad": 1, "color_pelo": "cafe", "tamano": "mediano", "sexo":"macho", "espacio_requerido": "grande", "nivel_actividad": 2, "url" : "assets/img/perros120.jpg"},
    {"id":2, "nombre": "chocolate", "edad": 1, "color_pelo": "caramelo", "tamano": "pequenho", "sexo":"macho", "espacio_requerido": "grande", "nivel_actividad": 2, "url" : "assets/img/perros121.jpg" },
    {"id":3, "nombre": "beto", "edad": 2, "color_pelo": "negro", "tamano": "mediano", "sexo":"macho", "espacio_requerido": "grande", "nivel_actividad": 2, "url" : "assets/img/perros122.jpg" },
    {"id":4, "nombre": "yndira", "edad": 24, "color_pelo": "cafe", "tamano": "grande", "sexo":"hembra", "espacio_requerido": "mediano", "nivel_actividad": 3, "url" : "assets/img/perros123.jpg" },
    {"id":5, "nombre": "vilita", "edad": 3, "color_pelo": "triguenho", "tamano": "mediano", "sexo":"macho", "espacio_requerido": "grande", "nivel_actividad": 2, "url" : "assets/img/perros124.jpg" },
    {"id":6, "nombre": "toprak", "edad": 2, "color_pelo": "cafe", "tamano": "grande", "sexo":"macho", "espacio_requerido": "grande", "nivel_actividad": 2, "url" : "assets/img/perros125.jpg" },
    {"id":7, "nombre": "sammy", "edad": 5, "color_pelo": "cafe", "tamano": "grande", "sexo":"macho", "espacio_requerido": "grande", "nivel_actividad": 2, "url" : "assets/img/perros126.jpg" },
    {"id":8, "nombre": "rubi", "edad": 7, "color_pelo": "negro", "tamano": "mediano", "sexo":"macho", "espacio_requerido": "grande", "nivel_actividad": 2, "url" : "assets/img/perros127.jpg" },
    {"id":9, "nombre": "firulais", "edad": 4, "color_pelo": "negro", "tamano": "pequenho", "sexo":"macho", "espacio_requerido": "grande", "nivel_actividad": 2, "url" : "assets/img/perros128.jpg" },
    {"id":10, "nombre": "boby", "edad": 9, "color_pelo": "negro", "tamano": "mediano", "sexo":"hembra", "espacio_requerido": "grande", "nivel_actividad": 2, "url" : "assets/img/perros129.jpg" },
    {"id":11, "nombre": "peluche", "edad": 6, "color_pelo": "cafe", "tamano": "grande", "sexo":"hembra", "espacio_requerido": "grande", "nivel_actividad": 2, "url" : "assets/img/perros130.jpg" },
    {"id":12, "nombre": "pocho", "edad": 10, "color_pelo": "cafe", "tamano": "pequenho", "sexo":"macho", "espacio_requerido": "grande", "nivel_actividad": 2, "url" : "assets/img/perros131.jpg" },
    {"id":13, "nombre": "paco", "edad": 6, "color_pelo": "crema", "tamano": "pequenho", "sexo":"hemgra", "espacio_requerido": "grande", "nivel_actividad": 2, "url" : "assets/img/perros132.jpg" },
    {"id":14, "nombre": "chavo", "edad": 7, "color_pelo": "cafe", "tamano": "pequenho", "sexo":"macho", "espacio_requerido": "grande", "nivel_actividad": 2, "url" : "assets/img/perros133.jpg" },
    {"id":15, "nombre": "caramelo", "edad": 8, "color_pelo": "cafe", "tamano": "mediano", "sexo":"macho", "espacio_requerido": "grande", "nivel_actividad": 2, "url" : "assets/img/perros134.jpg" },
    {"id":16, "nombre": "wilson", "edad": 4, "color_pelo": "negro", "tamano": "mediano", "sexo":"hembra", "espacio_requerido": "grande", "nivel_actividad": 2, "url" : "assets/img/perros135.jpg" }
  ];

  perro_carousel:any = [
    {"id":1, "url": "assets/img/perrosdes0.jpg"},
    {"id":1, "url": "assets/img/perrosdes1.jpg"},
    {"id":1, "url": "assets/img/perrosdes2.jpg"},
    {"id":1, "url": "assets/img/perrosdes3.jpg"},
    {"id":2, "url": "assets/img/perrosdes4.jpg"},
    {"id":2, "url": "assets/img/perrosdes5.jpg"},
    {"id":2, "url": "assets/img/perrosdes6.jpg"},
    {"id":2, "url": "assets/img/perrosdes7.jpg"},
    {"id":3, "url": "assets/img/perrosdes8.jpg"},
    {"id":3, "url": "assets/img/perrosdes9.jpg"},
    {"id":3, "url": "assets/img/perrosdes10.jpg"},
    {"id":3, "url": "assets/img/perrosdes11.jpg"},
    {"id":4, "url": "assets/img/perrosdes12.jpg"},
    {"id":4, "url": "assets/img/perrosdes13.jpg"},
    {"id":4, "url": "assets/img/perrosdes14.jpg"},
    {"id":4, "url": "assets/img/perrosdes15.jpg"},
    {"id":5, "url": "assets/img/perrosdes16.jpg"},
    {"id":5, "url": "assets/img/perrosdes17.jpg"},
    {"id":5, "url": "assets/img/perrosdes18.jpg"},
    {"id":5, "url": "assets/img/perrosdes19.jpg"},
    {"id":6, "url": "assets/img/perrosdes20.jpg"},
    {"id":6, "url": "assets/img/perrosdes21.jpg"},
    {"id":6, "url": "assets/img/perrosdes22.jpg"},
    {"id":6, "url": "assets/img/perrosdes23.jpg"},
    {"id":7, "url": "assets/img/perrosdes24.jpg"},
    {"id":7, "url": "assets/img/perrosdes25.jpg"},
    {"id":7, "url": "assets/img/perrosdes26.jpg"},
    {"id":7, "url": "assets/img/perrosdes27.jpg"},
    {"id":8, "url": "assets/img/perrosdes28.jpg"},
    {"id":8, "url": "assets/img/perrosdes29.jpg"},
    {"id":8, "url": "assets/img/perrosdes30.jpg"},
    {"id":8, "url": "assets/img/perrosdes31.jpg"},
    {"id":9, "url": "assets/img/perrosdes32.jpg"},
    {"id":9, "url": "assets/img/perrosdes33.jpg"},
    {"id":9, "url": "assets/img/perrosdes34.jpg"},
    {"id":9, "url": "assets/img/perrosdes35.jpg"},
    {"id":10, "url": "assets/img/perrosdes36.jpg"},
    {"id":10, "url": "assets/img/perrosdes37.jpg"},
    {"id":10, "url": "assets/img/perrosdes38.jpg"},
    {"id":10, "url": "assets/img/perrosdes39.jpg"},
    {"id":11, "url": "assets/img/perrosdes40.jpg"},
    {"id":11, "url": "assets/img/perrosdes41.jpg"},
    {"id":11, "url": "assets/img/perrosdes42.jpg"},
    {"id":11, "url": "assets/img/perrosdes43.jpg"},
    {"id":12, "url": "assets/img/perrosdes44.jpg"},
    {"id":12, "url": "assets/img/perrosdes45.jpg"},
    {"id":12, "url": "assets/img/perrosdes46.jpg"},
    {"id":12, "url": "assets/img/perrosdes47.jpg"},
    {"id":13, "url": "assets/img/perrosdes48.jpg"},
    {"id":13, "url": "assets/img/perrosdes49.jpg"},
    {"id":13, "url": "assets/img/perrosdes50.jpg"},
    {"id":13, "url": "assets/img/perrosdes51.jpg"},
    {"id":14, "url": "assets/img/perrosdes52.jpg"},
    {"id":14, "url": "assets/img/perrosdes53.jpg"},
    {"id":14, "url": "assets/img/perrosdes54.jpg"},
    {"id":14, "url": "assets/img/perrosdes55.jpg"},
    {"id":15, "url": "assets/img/perrosdes56.jpg"},
    {"id":15, "url": "assets/img/perrosdes57.jpg"},
    {"id":15, "url": "assets/img/perrosdes58.jpg"},
    {"id":15, "url": "assets/img/perrosdes59.jpg"},
  ]

  constructor() { }
  public getPerros(){
    return this.perros;
  }
  public buscarPerros(id){
    return this.perros.find((perro)=> {
      return perro.id==id
    }) || null;
  }

  public buscarPerrosImages(id){
    return this.perro_carousel.filter((perro)=>{
      return perro.id==id
    }) || null;
  }

}
