import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './IProduct.interface';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})

export class AgregarProductoComponent implements OnInit {
  @Input() url: string;
  categories: string = '';
  imageBase64: string = '';
  data: IProduct = {
    code: null,
    name: '',
    description: '',
    brand: '',
    stock: null,
    price: null,
    categories: [],
    image: ''
  };

  constructor(private http: HttpClient) {
    this.url = '/assets/image.jpg';
  }

  submitData() {
    this.data.categories = this.categories.split(', ');    
    console.log(this.data);
    // this.http.post<any>('/api/products', payload).subscribe(data => {
      
    // })
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
      reader.onload = (event: any) => {
        const image = new Image();
        image.src = event.target.result;
        image.onload = rs => {
          this.imageBase64 = event.target.result;
          console.log(this.imageBase64);
        }
        this.url = event.target.result;
        console.log(this.url);
      }
    } else {
      console.log("Nada");
    }
  }

  ngOnInit(): void {
  }

}
