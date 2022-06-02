import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductCard } from '../product-card/product-card.model';
import { addProduct, removeProduct, reset } from '../state/product.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-counter',
  templateUrl: './product-counter.component.html',
  styleUrls: ['./product-counter.component.css']
})
export class ProductCounterComponent implements OnInit {
  @Input() id: any;
  count: number = 0;
  constructor(private store: Store<{ cart: Array<ProductCard> }>, private _snackbar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  increment() {
    this.count = this.count + 1;
  }

  decrement() {
    this.count = this.count === 0 ? 0 : this.count- 1;
  }

  submit() {
    const objId: any = this.id;
    const objQuantity: number = this.count;
    const props = {
      productId: objId,
      newQuantity: objQuantity
    }
    this.store.dispatch(addProduct(props));

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let flag: boolean = true;
    cart.forEach((item: any) => {
      if(item[0] == objId) {
        item[1] = item[1] + objQuantity;
        flag = false;
      }
    });
    if(flag) {
      cart = [
        ...cart,
        [
          objId,
          objQuantity
        ]
      ]
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this._snackbar.open('Producto agregado correctamente', 'Cerrar');
  }

}
