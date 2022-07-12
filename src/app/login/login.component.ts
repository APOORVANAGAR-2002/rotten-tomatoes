import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "username is required";
    }
    else if (this.password.trim().length === 0) {
      this.errorMsg = "password is required";
    }
    else {
      this.errorMsg = "";
      let response = this.auth.login(this.username, this.password);
      if (response === 200) {
        this.router.navigate(['home'])
      }
      if (response === 403) {
        this.errorMsg = "Invalid credential";
      }
    }
  }

}
