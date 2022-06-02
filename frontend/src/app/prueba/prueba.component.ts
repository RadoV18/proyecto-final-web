import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { getAuthorizationHeaders } from '../utils/authHeaders';

export interface SaleElement {
  numVenta: number;
  nombres: string;
  apellidos: string;
  timestamp: string;
  detalle: string;
}

export interface ProductElement{
  numProd: number;
  code: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  popup = false;
  idVenta = "";
  SaleDisplayedColumns: string[] = ['numVenta', 'nombres', 'apellidos', 'timestamp', 'detalle'];
  SaleDataSource: SaleElement[] = [];

  ProductDisplayedColumns: string[] = ['numProd', 'codigo', 'nombre', 'precio', 'cantidad'];
  ProductDataSource: ProductElement[] = [];


  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('http://localhost:3001/api/sales', {'headers': getAuthorizationHeaders()}).subscribe({
      next: (data: any) => {
        this.SaleDataSource = data.map((sale: any, index: number) => {
          return {
            numVenta: index + 1,
            nombres: sale.contactId.name,
            apellidos: sale.contactId.lastName,
            timestamp: sale.timestamp,
            detalle: sale.id
          }
        })
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }

  changeDetalle(idVenta: any){
    console.log(idVenta);
    this.popup = true;
    this.idVenta = idVenta;
    this.http.get('http://localhost:3001/api/sales/products/'+ idVenta, {'headers': getAuthorizationHeaders()}).subscribe({
      next: (data: any)=>{
        this.ProductDataSource = data.map((product: any, index: number) => {
          return {
            numProd: index + 1,
            code: product.productId.code,
            name: product.productId.name,
            price: product.productId.price,
            quantity: product.quantity,
          }
        })
      },
      error: (err: any)=>{
        console.log(err);
      }
    })
  }
}
