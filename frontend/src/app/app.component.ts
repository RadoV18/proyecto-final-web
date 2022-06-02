import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ferreteria UCB';
<<<<<<< HEAD
=======
  isAuthorized: boolean = localStorage.getItem('token') ? true : false;
>>>>>>> 7e9d53c94ba31184f289d241494e813a6414d187
}
