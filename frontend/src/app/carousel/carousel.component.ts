import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
   
  imgCollection: Array<object> = [
      {
        image: 'http://cdn.shopify.com/s/files/1/0013/5033/6614/products/Juegodedestornilladores10piezas_1200x1200.jpg?v=1609940571',
        thumbImage: 'http://cdn.shopify.com/s/files/1/0013/5033/6614/products/Juegodedestornilladores10piezas_1200x1200.jpg?v=1609940571',
        alt: 'Destornilladores',
        title: 'Destornilladores'
      }, {
        image: 'https://ferropari.com/wp-content/uploads/2020/06/CROWN-T-780.jpg',
        thumbImage: 'https://ferropari.com/wp-content/uploads/2020/06/CROWN-T-780.jpg',
        alt: 'Taladros',
        title: 'Taladros'
      },{
        image: 'https://galba.com.bo/wp-content/uploads/2021/09/BO0017.jpg',
        thumbImage: 'https://galba.com.bo/wp-content/uploads/2021/09/BO0017.jpg',
        alt: 'Sierras',
        title: 'Sierras'
      },{
        image: 'https://image.made-in-china.com/155f0j00YfeUbLuaVicB/Steel-Shovel-with-Wooden-Handle-for-Farming-Tools.jpg',
        thumbImage: 'https://image.made-in-china.com/155f0j00YfeUbLuaVicB/Steel-Shovel-with-Wooden-Handle-for-Farming-Tools.jpg',
        alt: 'Palas',
        title: 'Palas'
      },{
        image: 'http://tornal.com.mx/catalogo/ferreteria-pintura.png',
        thumbImage: 'http://tornal.com.mx/catalogo/ferreteria-pintura.png',
        alt: 'Pinturas',
        title: 'Pinturas'
      },{
        image: 'https://www.miferreteria.cl/wp-content/uploads/2018/10/Picota-5-Libras-mango-fibra-ZP-5F-Truper-copy.jpg',
        thumbImage: 'https://www.miferreteria.cl/wp-content/uploads/2018/10/Picota-5-Libras-mango-fibra-ZP-5F-Truper-copy.jpg',
        alt: 'Picotas',
        title: 'Picotas'
      },{
        image: 'https://www.weitzler.cl/assets/images/ad9f1dfa9da96db324880834666935cd.jpg',
        thumbImage: 'https://www.weitzler.cl/assets/images/ad9f1dfa9da96db324880834666935cd.jpg',
        alt: 'Clavos',
        title: 'Clavos'
      },{
        image: 'https://img.freepik.com/vector-gratis/juego-herramientas-ferreteria-tornillos-tuercas-clavos-tornillos-hierro_80590-3339.jpg?w=2000',
        thumbImage: 'https://img.freepik.com/vector-gratis/juego-herramientas-ferreteria-tornillos-tuercas-clavos-tornillos-hierro_80590-3339.jpg?w=2000',
        alt: 'Tornillos',
        title: 'Tornillos'
      },{
        image: 'https://galba.com.bo/wp-content/uploads/2021/09/ME0032-a-ME0035.jpg',
        thumbImage: 'https://galba.com.bo/wp-content/uploads/2021/09/ME0032-a-ME0035.jpg',
        alt: 'Escaleras',
        title: 'Escaleras'
      },{
        image: 'https://galba.com.bo/wp-content/uploads/2021/09/TR0016.jpg',
        thumbImage: 'https://galba.com.bo/wp-content/uploads/2021/09/TR0016.jpg',
        alt: 'Alicates',
        title: 'Alicates'
      },
  ];
}
