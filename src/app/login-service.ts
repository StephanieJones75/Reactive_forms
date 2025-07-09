import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  http = inject(HttpClient);
  jwtHelper = inject(JwtHelperService)

  userLogin(data: {}) {
    return this.http.post('http://localhost:3000/signin/', data);
  }
  userSignUp(data: {}) {
    return this.http.post('http://localhost:3000/signup/', data);
  }

  isAuthenticated(){
    const token = localStorage.getItem('token');
    const isExpired = !this.jwtHelper.isTokenExpired(token);
    console.log(isExpired)
    return isExpired;
  }
}





