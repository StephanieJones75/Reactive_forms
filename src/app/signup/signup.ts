import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidation } from '../password-validation';
import { forbiddenNameValidation } from '../forbidden-name-validator';
import { RouterModule } from '@angular/router';
import { LoginService } from '../login-service';
// import { Signin } from './signin/signin';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class SignUp {

     loginService = inject(LoginService);

  signUpForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl(' ', [Validators.required, Validators.minLength(8), Validators.maxLength(12), PasswordValidation]),
    name: new FormControl('', [Validators.required, forbiddenNameValidation]),
    age: new FormControl(' ', [Validators.required]),
    department: new FormControl(' ', [Validators.required]),
  })

  submitSignUp() {
        if (this.signUpForm.value) {
      this.loginService.userSignUp(this.signUpForm.value).subscribe((data:any) => {
        if(data){
          console.log(data);
        }
      })
    }
  }
}
