import { Component, OnInit } from "@angular/core";
import { ProductCard } from '../product-card/product-card.model'
import { PRODUCTS } from "../mock-products";


@Component({
  selector: "app-nueva-venta",
  templateUrl: "./nueva-venta.component.html",
  styleUrls: ["./nueva-venta.component.css"],
})
export class NuevaVentaComponent implements OnInit {
  
  products = PRODUCTS;
  selectedProduct?: ProductCard;
    
  constructor() {}

  ngOnInit(): void {}

  onSelect(product: ProductCard): void{
    this.selectedProduct = product;
  }
}
