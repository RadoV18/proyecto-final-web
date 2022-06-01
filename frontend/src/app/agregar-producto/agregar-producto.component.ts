import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/IProduct.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})

export class AgregarProductoComponent implements OnInit {
  @Input() url: string;
  categories: string = '';
  data: IProduct = {
    code: null,
    name: '',
    description: '',
    brand: '',
    stock: null,
    price: null,
    categories: [],
    image: {
      type: '',
      data: '',
    }
  };

  constructor(private http: HttpClient, private _snackbar: MatSnackBar ) {
    this.url = '/assets/image.png';
  }

  submitData() {
    this.data.image.data = this.data.image.data.replace("data:", "")
            .replace(/^.+,/, "");
    this.data.categories = this.categories.split(', ');    
    this.http.post<any>('http://localhost:3001/api/products', this.data).subscribe({
      next: _data => {
        // show success message
        this._snackbar.open('Producto creado exitosamente.', 'Aceptar', {
          duration: 3000
        });
        this.data = {
          code: null,
          name: '',
          description: '',
          brand: '',
          stock: null,
          price: null,
          categories: [],
          image: {
            type: '',
            data: '',
          }
        };
        this.url = "./assets/image.png";
      },
      error: _err => {
        // show error message
        this._snackbar.open('Ocurrió un error.', 'Aceptar', {
          duration: 3000
        });
      }
    });
  }

  openFileBrowser(event: any) {
    event.preventDefault();
    let element: HTMLElement = document.getElementById('fileupload') as HTMLElement;
    element.click();
  }

  selectFile(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      this.data.image.type = event.target.files[0].type;

      reader.onload = (event: any) => {
        const image = new Image();
        image.src = event.target.result;
        image.onload = rs => {
          this.data.image.data = event.target.result;
        }
        this.url = event.target.result;
      }
    }
  }

  ngOnInit(): void {
  }
}
