import { HttpClient } from '@angular/common/http';
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
    
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3001/api/products').subscribe({
      next: (data: any) => {
        this.products = data;
        console.log(data);
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }

  onSelect(product: ProductCard): void{
    this.selectedProduct = product;
  }
}
