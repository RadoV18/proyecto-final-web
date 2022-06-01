import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IContact } from '../interfaces/IContact.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar-contacto',
  templateUrl: './agregar-contacto.component.html',
  styleUrls: ['./agregar-contacto.component.css']
})
export class AgregarContactoComponent implements OnInit {

  data: IContact = {
    name: '',
    lastName: '',
    ci: null,
    email: '',
    phone: null
  }

  constructor(private http: HttpClient, private _snackbar: MatSnackBar) { }

  submitData() {
    this.http.post(
      'http://localhost:3001/api/contacts', this.data
    ).subscribe({
      next: _data => {
        this._snackbar.open('Contacto creado exitosamente.', 'Aceptar', { 
          duration: 3000
        });
      },
      error: _err => {
        this._snackbar.open('Ocurrió un error.', 'Aceptar', {
          duration: 3000
        })
      }
    });
  }

  clear() {
    this.data = {
      name: '',
      lastName: '',
      ci: null,
      email: '',
      phone: null
    };
  }

  ngOnInit(): void {
  }

}
