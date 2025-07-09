import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login-service';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  loginService = inject(LoginService);
  router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.loginService.isAuthenticated()) { // Replace with your actual authentication check
      return true;
    } else {
      // Redirect to signin page if not authenticated
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
