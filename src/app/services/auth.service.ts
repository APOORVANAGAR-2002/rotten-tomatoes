import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  login(username: string, password: string) {
    if (username === 'name' && password === '1234') {
      return 200; 
    }
    else {
      return 403;
    }
  }

  logout() {
    this.route.navigate(['login']);
  }
}
