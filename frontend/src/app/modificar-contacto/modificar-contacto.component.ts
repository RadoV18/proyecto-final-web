import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IContact } from '../interfaces/IContact.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getAuthorizationHeaders } from '../utils/authHeaders';

@Component({
  selector: 'app-modificar-contacto',
  templateUrl: './modificar-contacto.component.html',
  styleUrls: ['./modificar-contacto.component.css']
})
export class ModificarContactoComponent implements OnInit {
  ci: number | null = 0;

  contactId: string = '';
  data: IContact = {
    name: '',
    lastName: '',
    ci: null,
    email: '',
    phone: null
  }
  isFound: boolean = false;

  constructor(private http: HttpClient, private _snackbar: MatSnackBar) { }

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

  submitData() {
    this.http.put(`http://localhost:3001/api/contacts/${this.contactId}`, this.data, {'headers': getAuthorizationHeaders()})
      .subscribe({
        next: (_data: any) => {
          this._snackbar.open('Contacto modificado exitosamente.', 'Aceptar', {
            duration: 3000
          });
          this.clearData();
        },
        error: (_err: any) => {
          this._snackbar.open('Ocurrió un error', 'Aceptar', {
            duration: 3000
          })
        }
      });
  }

  clearData() {
    this.data = {
      name: '',
      lastName: '',
      ci: null,
      email: '',
      phone: null
    };
    this.isFound = false;
    this.contactId = '';
    this.ci = null;
  }

  ngOnInit(): void {
  }

}
