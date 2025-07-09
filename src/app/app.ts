import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Signin } from './signin/signin';
import { SignUp } from './signup/signup';
import { Navbar } from './navbar/navbar';
import { PageNotFound } from './page-not-found/page-not-found';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, Signin, SignUp, Navbar, PageNotFound, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'reactive_forms';
}
