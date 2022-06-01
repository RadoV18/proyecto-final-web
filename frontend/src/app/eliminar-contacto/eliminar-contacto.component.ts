import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IContact } from '../interfaces/IContact.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-eliminar-contacto',
  templateUrl: './eliminar-contacto.component.html',
  styleUrls: ['./eliminar-contacto.component.css']
})
export class EliminarContactoComponent implements OnInit {
  ci: number | null = null;

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
    this.http.get(`http://localhost:3001/api/contacts/ci/${this.ci}`)
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

  clearData() {
    this.ci = null;
    this.contactId = '';
    this.data = {
      name: '',
      lastName: '',
      ci: null,
      email: '',
      phone: null
    }
    this.isFound = false;
  }

  submitData() {
    this.http.delete(`http://localhost:3001/api/contacts/${this.contactId}`).subscribe({
      next: (_data: any) => {
        this._snackbar.open('Contacto eliminado exitosamente.', 'Aceptar', {
          duration: 3000
        });
        this.clearData();
      },
      error: (_err: any) => {
        this._snackbar.open('Ocurrió un error.', 'Aceptar', {
          duration: 3000
        });
      }
    });
  }

  ngOnInit(): void {
  }

}
