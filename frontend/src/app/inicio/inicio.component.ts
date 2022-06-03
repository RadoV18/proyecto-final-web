import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  showLogin = false;

  username: string = '';
  password: string = '';

  loginAttempt: boolean = false;
  loginValid: boolean = true;
  isUsernameValid: boolean = true;
  isPasswordValid: boolean = true;

  toggle() {
    this.showLogin = true;
  }

  login() {
    this.loginAttempt = false;
    let validInputs: boolean = true;
    if (this.username === '') {
      this.isUsernameValid = false;
      validInputs = false;
    }
    if (this.password === '') {
      this.isPasswordValid = false;
      validInputs = false;
    }

    if (validInputs) {
      const data: any = {
        username: this.username,
        password: this.password
      };
      this.loginAttempt = true;
      this.http.post('http://localhost:3001/api/auth', data).subscribe({
        next: (data: any) => {
          console.log(data);
          localStorage.setItem('username', data.username);
          localStorage.setItem('token', data.token);
          localStorage.setItem('name', data.name);
          window.location.href = '/';
        },
        error: (err: any) => {
          this.loginValid = false;
        }
      });
    }

  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
}
