import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { getAuthorizationHeaders } from '../utils/authHeaders';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css']
})
export class DetalleVentaComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'brand', 'quantity', 'price', 'subtotal'];
  dataSource: any[] = [];
  total: number = 0;

  isFound = false;
  ci: number | null = null;
  contactId: string = '';

  cart: any = [];

  data: any = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
  };

  constructor(private http: HttpClient, private _snackbar: MatSnackBar, private router: Router) { }

  updateTotal( num: number) {
    this.total += num;
  }

  search() {
    this.http.get(`http://localhost:3001/api/contacts/ci/${this.ci}`, {'headers': getAuthorizationHeaders()})
      .subscribe({
        next: (response: any) => {
          this.data = {
            name: response.name,
            lastName: response.lastName,
            ci: response.ci,
            email: response.email,
            phone: response.phone
          }
          this.isFound = true;
          this.contactId = response.id;
        },
        error: (_err: any) => {
          this._snackbar.open('Contacto no encontrado', 'Aceptar', {
            duration: 3000
          })
        }
      });
  }

  confirm() {
    const sale = {
      contactId: this.contactId,
      products: this.cart
    }
    this.http.post('http://localhost:3001/api/sales', sale, {'headers': getAuthorizationHeaders()}).subscribe({
      next: (data: any) => {
        this._snackbar.open('Venta realizada.', 'Aceptar', { duration: 3000 });
        localStorage.removeItem('cart');
        this.router.navigate(['/ventas'])
      }
    });
  }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let total = 0;
    this.cart.forEach((item: any, index: number) => {
      this.http.get(`http://localhost:3001/api/products/${item[0]}`).subscribe({
        next: (data: any) => {
          this.dataSource = [...this.dataSource,
            {
              position: this.cart.length - index,
              name: data.name,
              brand: data.brand,
              quantity: item[1],
              price: data.price,
              subtotal: (item[1]*data.price)
            }
          ]
          console.log(total);
          this.updateTotal(Number(item[1])*Number(data.price));
        }
      })
    });
  }

}
