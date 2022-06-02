import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() id: any;
  @Input() code: any;
  @Input() name: any;
  @Input() description: any;
  @Input() brand: any;
  @Input() availability: any;
  @Input() stock: any;
  @Input() price: any;
  @Input() categories: any;
  @Input() extension: any;

  constructor() { }

  ngOnInit(): void {
  }

}
