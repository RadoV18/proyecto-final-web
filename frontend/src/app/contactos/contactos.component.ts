import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';


export interface ContactElement {
  name: string;
  position: number;
  lastName: string;
  ci: string;
  phone: number;
  email: string;
}

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})

export class ContactosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'lastName', 'ci', 'phone', 'email'];
  dataSource: ContactElement[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3001/api/contacts').subscribe({
      next: (data: any) => {
        this.dataSource = data.map((contact: any, index: number) => {
          return {
            ...contact,
            position: index + 1
          }
        })
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }

}
