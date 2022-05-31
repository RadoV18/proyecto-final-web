import { Component, OnInit, Input } from '@angular/core';


export interface PeriodicElement {
  nombre: string;
  position: number;
  apellido: string;
  ci: string;
  fono: number;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre: 'Hydrogen', apellido:'Apellido1', ci: 'H', fono: 1234, email: 'mail'},
  {position: 2, nombre: 'Helium', apellido: 'Apellido1', ci: 'He', fono: 1234, email: 'mail'},
  {position: 3, nombre: 'Lithium', apellido: 'Apellido1', ci: 'Li', fono: 1234, email: 'mail'},
  {position: 4, nombre: 'Beryllium', apellido: 'Apellido1', ci: 'Be', fono: 1234, email: 'mail'},
  {position: 5, nombre: 'Boron', apellido: 'Apellido1', ci: 'B', fono: 1234, email: 'mail'},
  {position: 6, nombre: 'Carbon', apellido: 'Apellido1', ci: 'C', fono: 1234, email: 'mail'},
  {position: 7, nombre: 'Nitrogen', apellido: 'Apellido1', ci: 'N', fono: 1234, email: 'mail'},
  {position: 8, nombre: 'Oxygen', apellido: 'Apellido1', ci: 'O', fono: 1234, email: 'mail'},
  {position: 9, nombre: 'Fluorine', apellido: 'Apellido1', ci: 'F', fono: 1234, email: 'mail'},
  {position: 10, nombre: 'Neon', apellido: 'Apellido1', ci: 'Ne', fono: 1234, email: 'mail'},
];

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})

export class ContactosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'nombre', 'apellido', 'ci', 'fono', 'email'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
