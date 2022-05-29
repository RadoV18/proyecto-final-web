import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  @Input() url: string;
  constructor() { 
    this.url = '/assets/image.jpg';

  }

  selectFile(event: any){
    if(event.target.files){
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event: any) =>{
          this.url = event.target.result;
          console.log(this.url);
        }
    }
    else {
       console.log("Nada");
    }
  }

  ngOnInit(): void {
  }
}
