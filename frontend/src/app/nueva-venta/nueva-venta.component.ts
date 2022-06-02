import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ProductCard } from "../product-card/product-card.model";

@Component({
  selector: "app-nueva-venta",
  templateUrl: "./nueva-venta.component.html",
  styleUrls: ["./nueva-venta.component.css"],
})
export class NuevaVentaComponent implements OnInit {
  products = [
    {
      id: "1012",
      code: 1,
      name: "Extra Creamy Milk Chocolate EXCELLENCE Bar (3.5 oz)",
      description:
        "The ultimate milk chocolate experience-an exceptionally smooth and creamy recipe. EXCELLENCE Extra Creamy is a pure milk chocolate bar. Expertly crafted with the finest ingredients by the Master Chocolatiers at Lindt.",
      brand: "IguiPene",
      availability: "En Stock",
      stock: 10,
      price: 200,
      categories: "Leche",
      extension: "/assets/img/products/1.jpg",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
