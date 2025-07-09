import { Component } from '@angular/core';
import { Signin } from '../signin/signin';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [Signin, RouterModule],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css'
})
export class PageNotFound {

}
