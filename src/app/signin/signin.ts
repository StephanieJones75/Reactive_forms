import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidation } from '../password-validation';
import { forbiddenNameValidation } from '../forbidden-name-validator';
import { RouterModule } from '@angular/router';
import { PageNotFound } from '../page-not-found/page-not-found';
import { LoginService } from '../login-service';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, RouterModule, PageNotFound],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {

  signInForm = new FormGroup({
    username: new FormControl(' ', [Validators.required, forbiddenNameValidation]),
    password: new FormControl(' ', [Validators.required, Validators.minLength(8), Validators.maxLength(12), PasswordValidation]),
    confirm_password: new FormControl(' ', [Validators.required, Validators.minLength(8), Validators.maxLength(12), PasswordValidation])
  })

  loginService = inject(LoginService);

  submitSignIn() {
    if (this.signInForm) {
      this.loginService.userLogin(this.signInForm.value).subscribe((result:any) => {
        if(result.token){
          localStorage.setItem('token', result.token);
        }
      })
    }
  }
}

