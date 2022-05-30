import { Component, OnInit, Input } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  fono: number;
  email: string;


}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', fono: 1234, email: 'mail'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', fono: 1234, email: 'mail'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', fono: 1234, email: 'mail'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', fono: 1234, email: 'mail'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', fono: 1234, email: 'mail'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', fono: 1234, email: 'mail'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', fono: 1234, email: 'mail'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', fono: 1234, email: 'mail'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', fono: 1234, email: 'mail'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', fono: 1234, email: 'mail'},
];

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})

export class ContactosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'fono', 'email'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
