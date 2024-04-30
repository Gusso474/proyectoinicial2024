import { Component } from '@angular/core';
//IMPORTAMOS LA INTERFAZ
import { Albums } from 'src/app/models/albums';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    //PROPIEDAD PUBLICA TIPO ARRAY
    public info: Albums[];

    //INICIALIZAR LA PROPIEDAD INFO
    constructor(){
      this.info = [
        {
        id: "",
        nombre: "Ok Computer",
        artista: "Radiohead",
        temas: 12,
        portada: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/06/16/14975872992361.jpg",
        alt: "Ok Computer"
      },
  
      {
        id: "",
        nombre: "Wish You Were Here",
        artista: "Pink Floyd",
        temas: 5,
        portada: "https://vinyl-records.nl/pink-floyd/wish-you-album-covers/wish-you-were-here-sweden/pink%20floyd%20wish%20you%20were%20sweden%202679.jpg",
        alt: "WYWH"
      },
  
      {
        id: "",
        nombre: "Demon Days",
        artista: "Gorillaz",
        temas: 15,
        portada: "https://contentv2.tap-commerce.com/cover/large/724387383821_1.jpg?id_com=1156",
        alt: "Demon Days"
      }
      ]
    }
}
