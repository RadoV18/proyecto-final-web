import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  loginAttempt: boolean = false;
  loginValid: boolean = true;
  isUsernameValid: boolean = true;
  isPasswordValid: boolean = true;

  login() {
    this.loginAttempt = false;
    let validInputs: boolean = true;
    if(this.username === '') {
      this.isUsernameValid = false;
      validInputs = false;
    }
    if(this.password === '') {
      this.isPasswordValid = false;
      validInputs = false;
    }

    if(validInputs) {
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
        },
        error: (err: any) => {
          this.loginValid = false;
        }
      });
    }

  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
