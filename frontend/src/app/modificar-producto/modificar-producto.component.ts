import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/IProduct.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {
  @Input() url: string | ArrayBuffer | null;
  originalImage: string | ArrayBuffer | null = '';
  isFound: boolean = false;
  code: number | null = null;
  productId: string = '';
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

  constructor(private http: HttpClient, private _snackbar: MatSnackBar) { 
    this.url = '/assets/image.png';
  }

  search() {
    this.http.get<any>(`http://localhost:3001/api/products/code/${this.code}`).subscribe({
      next: (data: any) => {
        this.isFound = true;
        this.productId = data.id;
        this.data = {
          code: data.code,
          name: data.name,
          description: data.description,
          brand: data.brand,
          stock: data.stock,
          price: data.price,
          categories: data.categories,
          image: {
            type: data.extension,
            data: ''
          }
        }
        this.categories = data.categories[0];
        for(let i = 1; i < data.categories.length - 1; i++) {
          this.categories += `, ${data.categories[i]}`;
        }

        this.getImage();
      },
      error: (err: any) => {
        this.isFound = false;
        this._snackbar.open('Producto no encontrado', 'Aceptar');
      }
    });
  }

  submitData() {
    if(this.isFound) {
      this.data.image.data = this.data.image.data
        .replace("data:", "")
        .replace(/^.+,/, "");
      this.data.categories = this.categories.split(', ');
      this.http.put<any>(`http://localhost:3001/api/products/${this.productId}`, this.data)
        .subscribe({
          next: _data => {
            this._snackbar.open('Producto modificado exitosamente.', 'Aceptar'); 
            this.clearData();
          },
          error: _err => {
            this._snackbar.open('Ocurrió un error.', 'Aceptar');
          }
        });
    }
  }

  clearData() {
    this.url = './assets/image.png';
    this.originalImage = '';
    this.isFound = false;
    this.code = null;
    this.productId = '';
    this.categories = '';
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
  }

  getImage() {
    this.http.get(
      `http://localhost:3001/api/products/${this.productId}/image/${this.data.image.type}`,
      { responseType: 'blob' }
    )
      .subscribe(data => {
        let reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = () => {
          this.url = reader.result;
          this.originalImage = reader.result;
          this.data.image.data = reader.result === null ? '' : reader.result.toString();
        }
      })
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
